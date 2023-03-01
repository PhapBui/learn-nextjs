import { SEO } from '@components/Common';
import { HeroSection, RecentPosts } from '@components/home';
import { FeatureWork } from '@components/home/featuredWorks';
import { MainLayout } from '@components/layouts';
import { NextPageWithLayout } from '@models/common';
import { Box } from '@mui/system';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <SEO
        data={{
          title: '',
          description: '',
          url: '',
          thumbnailUrl: '',
        }}
      />
      <HeroSection />
      <RecentPosts />
      <FeatureWork />
    </Box>
  );
};
Home.Layout = MainLayout;
export default Home;
