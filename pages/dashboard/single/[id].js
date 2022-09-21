import { useRouter } from "next/router";

const SingleDashboard = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>My id param is {id}</div>;
};

export default SingleDashboard;
