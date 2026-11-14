-- CODEVERSE AI
-- BY ADAM SHERIF

create table if not exists profiles (
    id uuid primary key references auth.users(id) on delete cascade,
    username text unique not null,
    points integer default 0,
    created_at timestamp with time zone default now()
);

create table if not exists lesson_progress (
    id bigint generated always as identity primary key,
    user_id uuid references auth.users(id) on delete cascade,
    lesson_name text not null,
    completed boolean default false,
    score integer default 0,
    created_at timestamp with time zone default now(),
    unique(user_id, lesson_name)
);

alter table profiles enable row level security;
alter table lesson_progress enable row level security;

create policy "Profiles are viewable by everyone"
on profiles for select
using (true);

create policy "Users can create their own profile"
on profiles for insert
with check (auth.uid() = id);

create policy "Users can update their own profile"
on profiles for update
using (auth.uid() = id)
with check (auth.uid() = id);

create policy "Users can view their own progress"
on lesson_progress for select
using (auth.uid() = user_id);

create policy "Users can add their own progress"
on lesson_progress for insert
with check (auth.uid() = user_id);

create policy "Users can update their own progress"
on lesson_progress for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
