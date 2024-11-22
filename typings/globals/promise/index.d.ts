// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/a02593d2778bd40de47d9b72bb1934907ee6b85f/promise/promise.d.ts
declare module "promise" {
	export = Promise;
}

declare var Promise: Promise.Ipromise;

declare namespace Promise {
	export interface Ipromise {
		new <T>(
			resolver: (
				resolve: (value: T) => void,
				reject: (reason: any) => void,
			) => void,
		): IThenable<T>;

		resolve: <T>(value: T) => IThenable<T>;
		reject: <T>(value: T) => IThenable<T>;
		all: (array: Array<IThenable<any>>) => IThenable<Array<any>>;
		denodeify: (fn: Function) => (...args: any[]) => IThenable<any>;
		nodeify: (fn: Function) => Function;
	}

	export interface IThenable<T> {
		then<R>(
			onFulfilled?: (value: T) => IThenable<R> | R,
			onRejected?: (error: any) => IThenable<R> | R,
		): IThenable<R>;

		catch<R>(onRejected?: (error: any) => IThenable<R> | R): IThenable<R>;

		done<R>(
			onFulfilled?: (value: T) => IThenable<R> | R,
			onRejected?: (error: any) => IThenable<R> | R,
		): IThenable<R>;
		nodeify<R>(callback: Function): IThenable<R>;
	}
}
