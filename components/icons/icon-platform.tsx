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

type Props = { color: 'light' | 'dark'; height?: number | string };

const LIGHT_URL = 'https://www.datocms-assets.com/63265/1646107015-logo.png';

const DARK_URL = 'https://www.datocms-assets.com/63265/1646107055-logo-alt.png';

export default function PlatformLogo({ color, height = 20 }: Props) {
  return <img height={height} src={color === 'light' ? LIGHT_URL : DARK_URL} />;
}
