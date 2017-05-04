import gql from "graphql-tag";

export default gql`
  mutation addLyricToSong($songId: ID!, $content: String!) {
    addLyricToSong(songId: $songId, content: $content) {
      id
      lyrics {
        id
        content
      }
    }
  }
`;
