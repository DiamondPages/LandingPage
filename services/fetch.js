import { gql, GraphQLClient } from 'graphql-request'

export async function getHome(){
    const query = gql`

    query{
        home {
            headline
            subheadline
            button
            image {
                url
              }
          }
    
        }
    ` 
    const endpoint = 'https://graphql.datocms.com'
    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${process.env.NEXT_ENV_DATOCMS_API_TOKEN}`,
        },
    })
    const data = await graphQLClient.request(query)
    return data.home

}

export async function getBenefits(){
    const query = gql`

    query{
        allBenefits(orderBy: id_ASC) {
          benefitIcon {
            url
          }
          benefitName
          benefitDescription
        }
        benefitsText {
          h2
          paragraph
        }
      
      }
    ` 
    const endpoint = 'https://graphql.datocms.com'
    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${process.env.NEXT_ENV_DATOCMS_API_TOKEN}`,
        },
    })
    const data = await graphQLClient.request(query)
    return data

}

