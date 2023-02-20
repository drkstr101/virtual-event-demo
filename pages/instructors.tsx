/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { GetStaticProps } from 'next';

import Header from '@components/header';
import InstructorsGrid from '@components/instructors-grid';
import Layout from '@components/layout';
import Page from '@components/page';

import { getAllInstructors } from '@lib/cms-api';
import { META_DESCRIPTION } from '@lib/constants';
import { Instructor } from '@lib/types';

type Props = {
  instructors: Instructor[];
};

export default function Instructors({ instructors }: Props) {
  const meta = {
    title: 'Instructors - Virtual Event Starter Kit',
    description: META_DESCRIPTION
  };
  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Instructors" description={meta.description} />
        <InstructorsGrid instructors={instructors} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const instructors = await getAllInstructors();

  return {
    props: {
      instructors
    },
    revalidate: 60
  };
};
