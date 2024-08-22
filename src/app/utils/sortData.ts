export function sortData(data: any[], config: { key: string, direction: string }) {
  return [...data].sort((a, b) => {
    if (a[config.key] < b[config.key]) return config.direction === 'ascending' ? -1 : 1;
    if (a[config.key] > b[config.key]) return config.direction === 'ascending' ? 1 : -1;
    return 0;
  });
}
