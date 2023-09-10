const mapping: Record<string, string> = {
  announcements: 'announcement',
  calendars: 'calendar',
  organizations: 'organization',
  platforms: 'platform',
  properties: 'property',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
