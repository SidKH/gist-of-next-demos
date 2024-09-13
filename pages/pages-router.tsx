import { getPrimaryContent, getSecondaryContent, getUser } from "@/lib/data";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const user = await getUser();
  const [primaryContent, secondaryContent] = await Promise.all([
    getPrimaryContent(user.id),
    getSecondaryContent(user.id),
  ]);

  return {
    props: {
      user,
      primaryContent,
      secondaryContent,
    },
  };
};

export default function Page({
  user,
  primaryContent,
  secondaryContent,
}: HomeProps) {
  return (
    <main className="flex min-h-screen justify-center items-center flex-col gap-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold leading-tight">{user.name}</h1>
        <p className="text-sm text-muted-foreground">{user.email}</p>
      </header>
      <Box>
        <p>{primaryContent}</p>
      </Box>
      <Box>
        <p>{secondaryContent}</p>
      </Box>
    </main>
  );
}

function Box({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 rounded-md border w-64 flex justify-center items-center h-20">
      {children}
    </div>
  );
}

interface HomeProps {
  user: { id: string; name: string; email: string };
  primaryContent: string;
  secondaryContent: string;
}
