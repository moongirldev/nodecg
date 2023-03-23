import type { User as NodeCGUser } from '../database';

declare global {
	namespace Express {
		/**
		 * This is the idiomatic, intended way of
		 * adding one's User type to the Request object
		 * when using Express with Passport.
		 */
		// eslint-disable-next-line @typescript-eslint/no-empty-interface
		interface User extends NodeCGUser {}
	}
}
