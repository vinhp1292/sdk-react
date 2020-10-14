const coreComponents = [
  'Button',
  'ButtonGroup',
  'Checkbox',
  'Image',
  'PoweredBy',
  'Radio',
  'Rating',
  'Select',
  'Swatch',
  'Text',
  'TextInput',
  'Tabs',
].sort();
const searchComponents = [
  'Filter',
  'PageSize',
  'Pagination',
  'Result',
  'Results',
  'SearchInput',
  'Sorting',
  'ViewType',
].sort();
const hooks = ['useFilter', 'usePageSize', 'usePagination', 'useQuery', 'useSorting'].sort();

export { coreComponents, searchComponents, hooks };