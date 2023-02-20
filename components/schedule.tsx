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

import { Presentation, Stage } from '@lib/types';
import cn from 'classnames';
import PresentationCard from './presentation-card';
import styles from './schedule.module.css';

function StageRow({ stage }: { stage: Stage }) {
  // Group presentations by the time block
  const timeBlocks = stage.schedule.reduce((allBlocks: any, presentation) => {
    allBlocks[presentation.start] = [...(allBlocks[presentation.start] || []), presentation];
    return allBlocks;
  }, {});

  return (
    <div key={stage.name} className={styles.row}>
      <h3 className={cn(styles['stage-name'], styles[stage.slug])}>
        <span>{stage.name}</span>
      </h3>
      <div className={cn(styles.presentations, styles[stage.slug])}>
        {Object.keys(timeBlocks).map((startTime: string) => (
          <div key={startTime}>
            {timeBlocks[startTime].map((presentation: Presentation, index: number) => (
              <PresentationCard
                key={presentation.title}
                presentation={presentation}
                showTime={index === 0}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

type Props = {
  allStages: Stage[];
};

export default function Schedule({ allStages }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles['row-wrapper']}>
        {allStages.map(stage => (
          <StageRow key={stage.slug} stage={stage} />
        ))}
      </div>
    </div>
  );
}
