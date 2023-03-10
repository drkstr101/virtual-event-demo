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

import { Instructor } from '@lib/types';
import Image from 'next/image';
import Link from 'next/link';
import styles from './instructors-grid.module.css';

type Props = {
  instructors: Instructor[];
};

export default function InstructorsGrid({ instructors }: Props) {
  return (
    <div className={styles.grid}>
      {instructors.map(instructor => (
        <Link key={instructor.name} href={`/instructors/${instructor.slug}`}>
          <a role="button" tabIndex={0} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                alt={instructor.name}
                src={instructor.image.url}
                className={styles.image}
                loading="lazy"
                quality="50"
                title={instructor.name}
                placeholder={instructor.image.blurDataURL ? 'blur' : 'empty'}
                blurDataURL={instructor.image.blurDataURL}
                width={300}
                height={300}
              />
            </div>
            <div className={styles.cardBody}>
              <div>
                <h2 className={styles.name}>{instructor.name}</h2>
                <p className={styles.title}>
                  {`${instructor.title} @ `}
                  <span className={styles.company}>{instructor.company}</span>
                </p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
