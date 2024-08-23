import Intro from './intro';
import Story from './story';
import Stats from '@/components/stats';
import Team from '@/components/team';
import Career from '@/components/career';
import Process from '@/components/process';
import Cta from '@/components/cta-02';

export const metadata = {
  title: 'About - Health Sync',
  description: 'About us',
};

export default function About() {
  return (
    <>
      <Intro />
      <Story />
      <Stats />
      <Team />
      <Career />
      <Process />
      <Cta />
    </>
  );
}
