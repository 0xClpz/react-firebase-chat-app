import functions from 'firebase-functions';

const dictionnary = {
  ":)": ""
}

export const replaceSmileys = functions.database()
  .ref('/messages/{message_id}')
  .onWrite(event => {
    if(!event.data.exists() || event.data.previous.exists()){
      return;
    }
    const data = event.data.val();
    const {message} = data;

  });