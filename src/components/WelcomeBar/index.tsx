interface WelcomeBarProps {
  user: string;
}

export function WelcomeBar({ user }: WelcomeBarProps) {
  return (
    <div className="p-4">
      <h1 className="text-lg font-bold">{user}</h1>
    </div>
  );
}
