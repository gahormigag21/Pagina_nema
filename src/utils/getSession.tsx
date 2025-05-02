import { getServerSession } from "next-auth";

const getSession = async () => {
  const session = await getServerSession();
  return session;
}

export default getSession;
