import { AbstractActionController, ContextInterface } from 'stix';
{{ imports: }}
/**
 * This is a controller. A controller holds the actions that run when a route matches.
 *
 * The name of the controller can be anything and it's a coincidence that it has the same name as the module.
 */
{{ dbActions: }}export class {{ pascalCased }}Controller extends AbstractActionController {
}
