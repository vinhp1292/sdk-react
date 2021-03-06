import * as React from 'react';

import ColorFilter from './ColorFilter';
import ListFilter from './ListFilter';
import RangeFilter from './RangeFilter';
import RatingFilter from './RatingFilter';
import SelectFilter from './SelectFilter';
import TabFilter from './TabFilter';
import { FilterProps } from './types';

const Filter = ({ type = 'list', ...rest }: FilterProps) => {
  if (type === 'color') {
    return <ColorFilter {...rest} />;
  }

  if (type === 'range') {
    return <RangeFilter {...rest} />;
  }

  if (type === 'rating') {
    return <RatingFilter {...rest} />;
  }

  if (type === 'select') {
    return <SelectFilter {...rest} />;
  }

  if (type === 'tabs') {
    return <TabFilter {...rest} />;
  }

  return <ListFilter {...rest} />;
};

export default Filter;
export * from './types';
