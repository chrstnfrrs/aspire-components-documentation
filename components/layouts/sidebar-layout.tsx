import React from 'react';

import {
  PlaceholderBox,
  PlaceholderSidebar,
  PlaceholderLink,
  PlaceholderH3,
} from '../placeholders';
import {
  convertPascalToKebab,
  capitalizeString,
} from '../../utils/convert-case';

import { IComponentInfo } from 'types';

interface ISideBarLayout {
  components: [IComponentInfo];
}

interface IComponentMap {
  [category: string]: string[];
}

const SideBarLayout: React.FC<ISideBarLayout> = ({ components, ...props }) => {
  const componentMap: IComponentMap = components.reduce(
    (accumulator: IComponentMap, component) => {
      accumulator[component.category] = accumulator[component.category]
        ? [component.name, ...accumulator[component.category]]
        : [component.name];

      return accumulator;
    },
    {},
  );

  return (
    <PlaceholderBox>
      <PlaceholderSidebar aria-labelledby='documentation'>
        {Object.keys(componentMap).map((category) => (
          <div key={category}>
            <PlaceholderH3>
              <PlaceholderLink href={`/docs/${category}`}>
                {capitalizeString(category)}
              </PlaceholderLink>
            </PlaceholderH3>
            {componentMap[category].map((component: string, index: number) => (
              <PlaceholderLink
                href={`/docs/${category}/${convertPascalToKebab(component)}`}
                key={index}
              >
                {component}
              </PlaceholderLink>
            ))}
          </div>
        ))}
      </PlaceholderSidebar>
      {props.children}
    </PlaceholderBox>
  );
};

export { SideBarLayout };
