import React from 'react';


// export async function getStaticProps({ params }) {

//     console.log(params)
// //   const postData = await getPostData(params.slug);
//   return {
//     props: {
//       params,
//     },
//   };
// }

// export async function getStaticPaths() {
// //   const paths = getAllPostIds();
//   return {
//     // paths,
//     fallback: false,
//   };
// }

function BlogDetail(props) {
    return (
        <div>
            <h2>Hello World</h2>
        </div>
    );
}

export default BlogDetail;