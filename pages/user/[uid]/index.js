import { useRouter } from "next/router";

export default function NumberPage() {
  const router = useRouter();
  const { id, number } = router.query;

  console.log({ router });

  return <div>Number index</div>;
}
