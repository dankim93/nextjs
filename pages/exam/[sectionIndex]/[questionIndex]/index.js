import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useQuery, gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
      name
    }
  }
`;

function QuestionIndex() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  const router = useRouter();
  console.log({ router });

  const { sectionIndex, questionIndex } = router.query;
  // const [qIndex, setQuestionIndex] = useState(questionIndex)

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      qINDEX{" "}
      {Object.keys(router.query).map((k) => (
        <div key={k}>
          {k}:{router.query[k]}
        </div>
      ))}
      <button
        onClick={() =>
          router.push(`/exam/${sectionIndex}/${Number(questionIndex) - 1}`)
        }
      >
        -
      </button>
      <button
        onClick={() =>
          router.push(`/exam/${sectionIndex}/${Number(questionIndex) + 1}`)
        }
      >
        +
      </button>
      <h5>Exchange Rates</h5>
      {data.rates.map((rate, i) => (
        <div key={i}>
          <p>currency: {rate.currency}</p>
          <p>rate: {rate.rate}</p>
          <p>name: {rate.name}</p>
        </div>
      ))}
    </div>
  );
}

export default dynamic(() => Promise.resolve(QuestionIndex), { ssr: false });
