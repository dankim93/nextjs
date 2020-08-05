import { useRouter } from "next/router";

export default function NumberPage() {
  const router = useRouter();
  const { id, number } = router.query;

  console.log({ router });

  return (
    <div>
      aid{" "}
      {Object.keys(router.query).map((k) => (
        <div key={k}>
          {k}:{router.query[k]}
        </div>
      ))}
    </div>
  );
}
