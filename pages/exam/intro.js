import { useRouter } from "next/router";

export default function NumberPage() {
  const router = useRouter();

  console.log({ router });

  return (
    <div>
      intro{" "}
      {Object.keys(router.query).map((k) => (
        <div key={k}>
          {k}:{router.query[k]}
        </div>
      ))}
    </div>
  );
}
