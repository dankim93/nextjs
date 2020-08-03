import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { getSortedPostsData } from "../lib/posts";
import { addStudent } from "../redux/actions/studentActions";

import { connect } from "react-redux";

function Home({ allPostsData, student, addStudent }) {
  console.log({ student, addStudent });
  const sampleStudent = { name: "dan", state: "CA" };
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello world</p>
        <button onClick={() => addStudent(sampleStudent)}>Add student</button>
        <p>
          <a href="https://google.com">go 2 google</a>
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  student: state.student,
});

const mapDispatchToProps = {
  addStudent: addStudent,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
