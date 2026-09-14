-- Run this once in your Supabase project's SQL editor (Project > SQL Editor > New query).
-- Creates the table that stores each signed-in user's app progress.

create table if not exists public.progress_snapshots (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.progress_snapshots enable row level security;

create policy "Users can read their own progress"
  on public.progress_snapshots for select
  using (auth.uid() = user_id);

create policy "Users can insert their own progress"
  on public.progress_snapshots for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own progress"
  on public.progress_snapshots for update
  using (auth.uid() = user_id);
