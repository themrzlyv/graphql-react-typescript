import {gql} from "@apollo/client";


export const CONNECT_CATEGORY = gql`
    query ($sort: SortFindManyCategoryInput) {
        viewer {
            categoryList (sort: $sort) {
                categoryID
                name
                description
            }
        }
    }
`;