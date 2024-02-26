import Layout from '../components/Layout';
import InGameContent from '../components/InGameContent';

const InGame = () => {
  return (
    <Layout RightMainContent={<InGameContent />}/>
  );
};

export default InGame;