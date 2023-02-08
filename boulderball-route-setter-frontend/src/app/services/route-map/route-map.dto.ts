/**
 * A DTO used for boulder route maps.
 * This contains the full definition of a route map for the Boulderball.
 */
export class RouteMapDto {
  id: number = 0;

  name: string = '';

  routeDefinition: number[] = [];

  constructor(id: number, name: string, routeDefinition: number[]) {
    this.id = id;
    this.name = name;
    this.routeDefinition = routeDefinition;
  }
}
