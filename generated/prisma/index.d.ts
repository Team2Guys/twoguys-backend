
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model Admins
 * 
 */
export type Admins = $Result.DefaultSelection<Prisma.$AdminsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.categories.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admins`: Exposes CRUD operations for the **Admins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admins.findMany()
    * ```
    */
  get admins(): Prisma.AdminsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    categories: 'categories',
    Admins: 'Admins'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categories" | "admins"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      Admins: {
        payload: Prisma.$AdminsPayload<ExtArgs>
        fields: Prisma.AdminsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          findFirst: {
            args: Prisma.AdminsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          findMany: {
            args: Prisma.AdminsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>[]
          }
          create: {
            args: Prisma.AdminsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          createMany: {
            args: Prisma.AdminsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>[]
          }
          delete: {
            args: Prisma.AdminsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          update: {
            args: Prisma.AdminsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          deleteMany: {
            args: Prisma.AdminsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>[]
          }
          upsert: {
            args: Prisma.AdminsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          aggregate: {
            args: Prisma.AdminsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmins>
          }
          groupBy: {
            args: Prisma.AdminsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminsCountArgs<ExtArgs>
            result: $Utils.Optional<AdminsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    categories?: categoriesOmit
    admins?: AdminsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    last_editedBy: string | null
    short_description: string | null
    custom_url: string | null
    BannerText: string | null
    BannerHeading: string | null
    RecallUrl: string | null
    breadCrum: string | null
    topHeading: string | null
    topDescription: string | null
    categoryHeroToptext: string | null
    categoryHeroHeading: string | null
    leftHeading: string | null
    Heading: string | null
    bodyHeading: string | null
    bodyMainHeading: string | null
    bodyText: string | null
    Bannerdiscount: string | null
    salesBannerHeading: string | null
    paraText: string | null
    Bannercounter: Date | null
    Product_Section_heading: string | null
    bottomText: string | null
    explore_Heading: string | null
    explore_main_heading: string | null
    explore_description: string | null
    Canonical_Tag: string | null
    Meta_Description: string | null
    Meta_Title: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    last_editedBy: string | null
    short_description: string | null
    custom_url: string | null
    BannerText: string | null
    BannerHeading: string | null
    RecallUrl: string | null
    breadCrum: string | null
    topHeading: string | null
    topDescription: string | null
    categoryHeroToptext: string | null
    categoryHeroHeading: string | null
    leftHeading: string | null
    Heading: string | null
    bodyHeading: string | null
    bodyMainHeading: string | null
    bodyText: string | null
    Bannerdiscount: string | null
    salesBannerHeading: string | null
    paraText: string | null
    Bannercounter: Date | null
    Product_Section_heading: string | null
    bottomText: string | null
    explore_Heading: string | null
    explore_main_heading: string | null
    explore_description: string | null
    Canonical_Tag: string | null
    Meta_Description: string | null
    Meta_Title: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    posterImageUrl: number
    last_editedBy: number
    short_description: number
    custom_url: number
    Banners: number
    BannerText: number
    BannerHeading: number
    RecallUrl: number
    breadCrum: number
    topHeading: number
    topDescription: number
    categoryHeroImages: number
    categoryHeroToptext: number
    categoryHeroHeading: number
    categoryHeroText: number
    categoryFaqs: number
    leftHeading: number
    categoryText: number
    Heading: number
    paras: number
    bodyHeading: number
    bodyMainHeading: number
    bodyText: number
    Bannerdiscount: number
    salesBannerHeading: number
    paraText: number
    Bannercounter: number
    Product_Section_heading: number
    bottomText: number
    explore_Heading: number
    explore_main_heading: number
    explore_description: number
    Canonical_Tag: number
    Meta_Description: number
    Meta_Title: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    last_editedBy?: true
    short_description?: true
    custom_url?: true
    BannerText?: true
    BannerHeading?: true
    RecallUrl?: true
    breadCrum?: true
    topHeading?: true
    topDescription?: true
    categoryHeroToptext?: true
    categoryHeroHeading?: true
    leftHeading?: true
    Heading?: true
    bodyHeading?: true
    bodyMainHeading?: true
    bodyText?: true
    Bannerdiscount?: true
    salesBannerHeading?: true
    paraText?: true
    Bannercounter?: true
    Product_Section_heading?: true
    bottomText?: true
    explore_Heading?: true
    explore_main_heading?: true
    explore_description?: true
    Canonical_Tag?: true
    Meta_Description?: true
    Meta_Title?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    last_editedBy?: true
    short_description?: true
    custom_url?: true
    BannerText?: true
    BannerHeading?: true
    RecallUrl?: true
    breadCrum?: true
    topHeading?: true
    topDescription?: true
    categoryHeroToptext?: true
    categoryHeroHeading?: true
    leftHeading?: true
    Heading?: true
    bodyHeading?: true
    bodyMainHeading?: true
    bodyText?: true
    Bannerdiscount?: true
    salesBannerHeading?: true
    paraText?: true
    Bannercounter?: true
    Product_Section_heading?: true
    bottomText?: true
    explore_Heading?: true
    explore_main_heading?: true
    explore_description?: true
    Canonical_Tag?: true
    Meta_Description?: true
    Meta_Title?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    posterImageUrl?: true
    last_editedBy?: true
    short_description?: true
    custom_url?: true
    Banners?: true
    BannerText?: true
    BannerHeading?: true
    RecallUrl?: true
    breadCrum?: true
    topHeading?: true
    topDescription?: true
    categoryHeroImages?: true
    categoryHeroToptext?: true
    categoryHeroHeading?: true
    categoryHeroText?: true
    categoryFaqs?: true
    leftHeading?: true
    categoryText?: true
    Heading?: true
    paras?: true
    bodyHeading?: true
    bodyMainHeading?: true
    bodyText?: true
    Bannerdiscount?: true
    salesBannerHeading?: true
    paraText?: true
    Bannercounter?: true
    Product_Section_heading?: true
    bottomText?: true
    explore_Heading?: true
    explore_main_heading?: true
    explore_description?: true
    Canonical_Tag?: true
    Meta_Description?: true
    Meta_Title?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    posterImageUrl: JsonValue
    last_editedBy: string | null
    short_description: string | null
    custom_url: string
    Banners: JsonValue | null
    BannerText: string | null
    BannerHeading: string | null
    RecallUrl: string | null
    breadCrum: string | null
    topHeading: string | null
    topDescription: string | null
    categoryHeroImages: JsonValue[]
    categoryHeroToptext: string | null
    categoryHeroHeading: string | null
    categoryHeroText: JsonValue[]
    categoryFaqs: JsonValue[]
    leftHeading: string | null
    categoryText: JsonValue[]
    Heading: string | null
    paras: JsonValue[]
    bodyHeading: string | null
    bodyMainHeading: string | null
    bodyText: string | null
    Bannerdiscount: string | null
    salesBannerHeading: string | null
    paraText: string | null
    Bannercounter: Date | null
    Product_Section_heading: string | null
    bottomText: string | null
    explore_Heading: string | null
    explore_main_heading: string | null
    explore_description: string | null
    Canonical_Tag: string | null
    Meta_Description: string | null
    Meta_Title: string | null
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posterImageUrl?: boolean
    last_editedBy?: boolean
    short_description?: boolean
    custom_url?: boolean
    Banners?: boolean
    BannerText?: boolean
    BannerHeading?: boolean
    RecallUrl?: boolean
    breadCrum?: boolean
    topHeading?: boolean
    topDescription?: boolean
    categoryHeroImages?: boolean
    categoryHeroToptext?: boolean
    categoryHeroHeading?: boolean
    categoryHeroText?: boolean
    categoryFaqs?: boolean
    leftHeading?: boolean
    categoryText?: boolean
    Heading?: boolean
    paras?: boolean
    bodyHeading?: boolean
    bodyMainHeading?: boolean
    bodyText?: boolean
    Bannerdiscount?: boolean
    salesBannerHeading?: boolean
    paraText?: boolean
    Bannercounter?: boolean
    Product_Section_heading?: boolean
    bottomText?: boolean
    explore_Heading?: boolean
    explore_main_heading?: boolean
    explore_description?: boolean
    Canonical_Tag?: boolean
    Meta_Description?: boolean
    Meta_Title?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posterImageUrl?: boolean
    last_editedBy?: boolean
    short_description?: boolean
    custom_url?: boolean
    Banners?: boolean
    BannerText?: boolean
    BannerHeading?: boolean
    RecallUrl?: boolean
    breadCrum?: boolean
    topHeading?: boolean
    topDescription?: boolean
    categoryHeroImages?: boolean
    categoryHeroToptext?: boolean
    categoryHeroHeading?: boolean
    categoryHeroText?: boolean
    categoryFaqs?: boolean
    leftHeading?: boolean
    categoryText?: boolean
    Heading?: boolean
    paras?: boolean
    bodyHeading?: boolean
    bodyMainHeading?: boolean
    bodyText?: boolean
    Bannerdiscount?: boolean
    salesBannerHeading?: boolean
    paraText?: boolean
    Bannercounter?: boolean
    Product_Section_heading?: boolean
    bottomText?: boolean
    explore_Heading?: boolean
    explore_main_heading?: boolean
    explore_description?: boolean
    Canonical_Tag?: boolean
    Meta_Description?: boolean
    Meta_Title?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posterImageUrl?: boolean
    last_editedBy?: boolean
    short_description?: boolean
    custom_url?: boolean
    Banners?: boolean
    BannerText?: boolean
    BannerHeading?: boolean
    RecallUrl?: boolean
    breadCrum?: boolean
    topHeading?: boolean
    topDescription?: boolean
    categoryHeroImages?: boolean
    categoryHeroToptext?: boolean
    categoryHeroHeading?: boolean
    categoryHeroText?: boolean
    categoryFaqs?: boolean
    leftHeading?: boolean
    categoryText?: boolean
    Heading?: boolean
    paras?: boolean
    bodyHeading?: boolean
    bodyMainHeading?: boolean
    bodyText?: boolean
    Bannerdiscount?: boolean
    salesBannerHeading?: boolean
    paraText?: boolean
    Bannercounter?: boolean
    Product_Section_heading?: boolean
    bottomText?: boolean
    explore_Heading?: boolean
    explore_main_heading?: boolean
    explore_description?: boolean
    Canonical_Tag?: boolean
    Meta_Description?: boolean
    Meta_Title?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posterImageUrl?: boolean
    last_editedBy?: boolean
    short_description?: boolean
    custom_url?: boolean
    Banners?: boolean
    BannerText?: boolean
    BannerHeading?: boolean
    RecallUrl?: boolean
    breadCrum?: boolean
    topHeading?: boolean
    topDescription?: boolean
    categoryHeroImages?: boolean
    categoryHeroToptext?: boolean
    categoryHeroHeading?: boolean
    categoryHeroText?: boolean
    categoryFaqs?: boolean
    leftHeading?: boolean
    categoryText?: boolean
    Heading?: boolean
    paras?: boolean
    bodyHeading?: boolean
    bodyMainHeading?: boolean
    bodyText?: boolean
    Bannerdiscount?: boolean
    salesBannerHeading?: boolean
    paraText?: boolean
    Bannercounter?: boolean
    Product_Section_heading?: boolean
    bottomText?: boolean
    explore_Heading?: boolean
    explore_main_heading?: boolean
    explore_description?: boolean
    Canonical_Tag?: boolean
    Meta_Description?: boolean
    Meta_Title?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "posterImageUrl" | "last_editedBy" | "short_description" | "custom_url" | "Banners" | "BannerText" | "BannerHeading" | "RecallUrl" | "breadCrum" | "topHeading" | "topDescription" | "categoryHeroImages" | "categoryHeroToptext" | "categoryHeroHeading" | "categoryHeroText" | "categoryFaqs" | "leftHeading" | "categoryText" | "Heading" | "paras" | "bodyHeading" | "bodyMainHeading" | "bodyText" | "Bannerdiscount" | "salesBannerHeading" | "paraText" | "Bannercounter" | "Product_Section_heading" | "bottomText" | "explore_Heading" | "explore_main_heading" | "explore_description" | "Canonical_Tag" | "Meta_Description" | "Meta_Title", ExtArgs["result"]["categories"]>

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date | null
      updatedAt: Date | null
      posterImageUrl: Prisma.JsonValue
      last_editedBy: string | null
      short_description: string | null
      custom_url: string
      Banners: Prisma.JsonValue | null
      BannerText: string | null
      BannerHeading: string | null
      RecallUrl: string | null
      breadCrum: string | null
      topHeading: string | null
      topDescription: string | null
      categoryHeroImages: Prisma.JsonValue[]
      categoryHeroToptext: string | null
      categoryHeroHeading: string | null
      categoryHeroText: Prisma.JsonValue[]
      categoryFaqs: Prisma.JsonValue[]
      leftHeading: string | null
      categoryText: Prisma.JsonValue[]
      Heading: string | null
      paras: Prisma.JsonValue[]
      bodyHeading: string | null
      bodyMainHeading: string | null
      bodyText: string | null
      Bannerdiscount: string | null
      salesBannerHeading: string | null
      paraText: string | null
      Bannercounter: Date | null
      Product_Section_heading: string | null
      bottomText: string | null
      explore_Heading: string | null
      explore_main_heading: string | null
      explore_description: string | null
      Canonical_Tag: string | null
      Meta_Description: string | null
      Meta_Title: string | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'Int'>
    readonly name: FieldRef<"categories", 'String'>
    readonly description: FieldRef<"categories", 'String'>
    readonly createdAt: FieldRef<"categories", 'DateTime'>
    readonly updatedAt: FieldRef<"categories", 'DateTime'>
    readonly posterImageUrl: FieldRef<"categories", 'Json'>
    readonly last_editedBy: FieldRef<"categories", 'String'>
    readonly short_description: FieldRef<"categories", 'String'>
    readonly custom_url: FieldRef<"categories", 'String'>
    readonly Banners: FieldRef<"categories", 'Json'>
    readonly BannerText: FieldRef<"categories", 'String'>
    readonly BannerHeading: FieldRef<"categories", 'String'>
    readonly RecallUrl: FieldRef<"categories", 'String'>
    readonly breadCrum: FieldRef<"categories", 'String'>
    readonly topHeading: FieldRef<"categories", 'String'>
    readonly topDescription: FieldRef<"categories", 'String'>
    readonly categoryHeroImages: FieldRef<"categories", 'Json[]'>
    readonly categoryHeroToptext: FieldRef<"categories", 'String'>
    readonly categoryHeroHeading: FieldRef<"categories", 'String'>
    readonly categoryHeroText: FieldRef<"categories", 'Json[]'>
    readonly categoryFaqs: FieldRef<"categories", 'Json[]'>
    readonly leftHeading: FieldRef<"categories", 'String'>
    readonly categoryText: FieldRef<"categories", 'Json[]'>
    readonly Heading: FieldRef<"categories", 'String'>
    readonly paras: FieldRef<"categories", 'Json[]'>
    readonly bodyHeading: FieldRef<"categories", 'String'>
    readonly bodyMainHeading: FieldRef<"categories", 'String'>
    readonly bodyText: FieldRef<"categories", 'String'>
    readonly Bannerdiscount: FieldRef<"categories", 'String'>
    readonly salesBannerHeading: FieldRef<"categories", 'String'>
    readonly paraText: FieldRef<"categories", 'String'>
    readonly Bannercounter: FieldRef<"categories", 'DateTime'>
    readonly Product_Section_heading: FieldRef<"categories", 'String'>
    readonly bottomText: FieldRef<"categories", 'String'>
    readonly explore_Heading: FieldRef<"categories", 'String'>
    readonly explore_main_heading: FieldRef<"categories", 'String'>
    readonly explore_description: FieldRef<"categories", 'String'>
    readonly Canonical_Tag: FieldRef<"categories", 'String'>
    readonly Meta_Description: FieldRef<"categories", 'String'>
    readonly Meta_Title: FieldRef<"categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
  }


  /**
   * Model Admins
   */

  export type AggregateAdmins = {
    _count: AdminsCountAggregateOutputType | null
    _avg: AdminsAvgAggregateOutputType | null
    _sum: AdminsSumAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  export type AdminsAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminsSumAggregateOutputType = {
    id: number | null
  }

  export type AdminsMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    password: string | null
    canAddProduct: boolean | null
    canEditProduct: boolean | null
    canDeleteProduct: boolean | null
    canAddCategory: boolean | null
    canDeleteCategory: boolean | null
    canEditCategory: boolean | null
    canCheckProfit: boolean | null
    canCheckRevenue: boolean | null
    canCheckVisitors: boolean | null
    canViewUsers: boolean | null
    canViewSales: boolean | null
    canVeiwAdmins: boolean | null
    canVeiwTotalproducts: boolean | null
    canVeiwTotalCategories: boolean | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
    last_editedBy: string | null
  }

  export type AdminsMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    password: string | null
    canAddProduct: boolean | null
    canEditProduct: boolean | null
    canDeleteProduct: boolean | null
    canAddCategory: boolean | null
    canDeleteCategory: boolean | null
    canEditCategory: boolean | null
    canCheckProfit: boolean | null
    canCheckRevenue: boolean | null
    canCheckVisitors: boolean | null
    canViewUsers: boolean | null
    canViewSales: boolean | null
    canVeiwAdmins: boolean | null
    canVeiwTotalproducts: boolean | null
    canVeiwTotalCategories: boolean | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
    last_editedBy: string | null
  }

  export type AdminsCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    password: number
    canAddProduct: number
    canEditProduct: number
    canDeleteProduct: number
    canAddCategory: number
    canDeleteCategory: number
    canEditCategory: number
    canCheckProfit: number
    canCheckRevenue: number
    canCheckVisitors: number
    canViewUsers: number
    canViewSales: number
    canVeiwAdmins: number
    canVeiwTotalproducts: number
    canVeiwTotalCategories: number
    posterImageUrl: number
    role: number
    createdAt: number
    updatedAt: number
    last_editedBy: number
    _all: number
  }


  export type AdminsAvgAggregateInputType = {
    id?: true
  }

  export type AdminsSumAggregateInputType = {
    id?: true
  }

  export type AdminsMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    canAddProduct?: true
    canEditProduct?: true
    canDeleteProduct?: true
    canAddCategory?: true
    canDeleteCategory?: true
    canEditCategory?: true
    canCheckProfit?: true
    canCheckRevenue?: true
    canCheckVisitors?: true
    canViewUsers?: true
    canViewSales?: true
    canVeiwAdmins?: true
    canVeiwTotalproducts?: true
    canVeiwTotalCategories?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    last_editedBy?: true
  }

  export type AdminsMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    canAddProduct?: true
    canEditProduct?: true
    canDeleteProduct?: true
    canAddCategory?: true
    canDeleteCategory?: true
    canEditCategory?: true
    canCheckProfit?: true
    canCheckRevenue?: true
    canCheckVisitors?: true
    canViewUsers?: true
    canViewSales?: true
    canVeiwAdmins?: true
    canVeiwTotalproducts?: true
    canVeiwTotalCategories?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    last_editedBy?: true
  }

  export type AdminsCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    canAddProduct?: true
    canEditProduct?: true
    canDeleteProduct?: true
    canAddCategory?: true
    canDeleteCategory?: true
    canEditCategory?: true
    canCheckProfit?: true
    canCheckRevenue?: true
    canCheckVisitors?: true
    canViewUsers?: true
    canViewSales?: true
    canVeiwAdmins?: true
    canVeiwTotalproducts?: true
    canVeiwTotalCategories?: true
    posterImageUrl?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    last_editedBy?: true
    _all?: true
  }

  export type AdminsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to aggregate.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminsMaxAggregateInputType
  }

  export type GetAdminsAggregateType<T extends AdminsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmins[P]>
      : GetScalarType<T[P], AggregateAdmins[P]>
  }




  export type AdminsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminsWhereInput
    orderBy?: AdminsOrderByWithAggregationInput | AdminsOrderByWithAggregationInput[]
    by: AdminsScalarFieldEnum[] | AdminsScalarFieldEnum
    having?: AdminsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminsCountAggregateInputType | true
    _avg?: AdminsAvgAggregateInputType
    _sum?: AdminsSumAggregateInputType
    _min?: AdminsMinAggregateInputType
    _max?: AdminsMaxAggregateInputType
  }

  export type AdminsGroupByOutputType = {
    id: number
    fullname: string
    email: string
    password: string
    canAddProduct: boolean
    canEditProduct: boolean
    canDeleteProduct: boolean
    canAddCategory: boolean
    canDeleteCategory: boolean
    canEditCategory: boolean
    canCheckProfit: boolean
    canCheckRevenue: boolean
    canCheckVisitors: boolean
    canViewUsers: boolean
    canViewSales: boolean
    canVeiwAdmins: boolean
    canVeiwTotalproducts: boolean
    canVeiwTotalCategories: boolean
    posterImageUrl: JsonValue | null
    role: string
    createdAt: Date | null
    updatedAt: Date | null
    last_editedBy: string | null
    _count: AdminsCountAggregateOutputType | null
    _avg: AdminsAvgAggregateOutputType | null
    _sum: AdminsSumAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  type GetAdminsGroupByPayload<T extends AdminsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminsGroupByOutputType[P]>
            : GetScalarType<T[P], AdminsGroupByOutputType[P]>
        }
      >
    >


  export type AdminsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    canAddProduct?: boolean
    canEditProduct?: boolean
    canDeleteProduct?: boolean
    canAddCategory?: boolean
    canDeleteCategory?: boolean
    canEditCategory?: boolean
    canCheckProfit?: boolean
    canCheckRevenue?: boolean
    canCheckVisitors?: boolean
    canViewUsers?: boolean
    canViewSales?: boolean
    canVeiwAdmins?: boolean
    canVeiwTotalproducts?: boolean
    canVeiwTotalCategories?: boolean
    posterImageUrl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    last_editedBy?: boolean
  }, ExtArgs["result"]["admins"]>

  export type AdminsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    canAddProduct?: boolean
    canEditProduct?: boolean
    canDeleteProduct?: boolean
    canAddCategory?: boolean
    canDeleteCategory?: boolean
    canEditCategory?: boolean
    canCheckProfit?: boolean
    canCheckRevenue?: boolean
    canCheckVisitors?: boolean
    canViewUsers?: boolean
    canViewSales?: boolean
    canVeiwAdmins?: boolean
    canVeiwTotalproducts?: boolean
    canVeiwTotalCategories?: boolean
    posterImageUrl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    last_editedBy?: boolean
  }, ExtArgs["result"]["admins"]>

  export type AdminsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    canAddProduct?: boolean
    canEditProduct?: boolean
    canDeleteProduct?: boolean
    canAddCategory?: boolean
    canDeleteCategory?: boolean
    canEditCategory?: boolean
    canCheckProfit?: boolean
    canCheckRevenue?: boolean
    canCheckVisitors?: boolean
    canViewUsers?: boolean
    canViewSales?: boolean
    canVeiwAdmins?: boolean
    canVeiwTotalproducts?: boolean
    canVeiwTotalCategories?: boolean
    posterImageUrl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    last_editedBy?: boolean
  }, ExtArgs["result"]["admins"]>

  export type AdminsSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    canAddProduct?: boolean
    canEditProduct?: boolean
    canDeleteProduct?: boolean
    canAddCategory?: boolean
    canDeleteCategory?: boolean
    canEditCategory?: boolean
    canCheckProfit?: boolean
    canCheckRevenue?: boolean
    canCheckVisitors?: boolean
    canViewUsers?: boolean
    canViewSales?: boolean
    canVeiwAdmins?: boolean
    canVeiwTotalproducts?: boolean
    canVeiwTotalCategories?: boolean
    posterImageUrl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    last_editedBy?: boolean
  }

  export type AdminsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "email" | "password" | "canAddProduct" | "canEditProduct" | "canDeleteProduct" | "canAddCategory" | "canDeleteCategory" | "canEditCategory" | "canCheckProfit" | "canCheckRevenue" | "canCheckVisitors" | "canViewUsers" | "canViewSales" | "canVeiwAdmins" | "canVeiwTotalproducts" | "canVeiwTotalCategories" | "posterImageUrl" | "role" | "createdAt" | "updatedAt" | "last_editedBy", ExtArgs["result"]["admins"]>

  export type $AdminsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admins"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      email: string
      password: string
      canAddProduct: boolean
      canEditProduct: boolean
      canDeleteProduct: boolean
      canAddCategory: boolean
      canDeleteCategory: boolean
      canEditCategory: boolean
      canCheckProfit: boolean
      canCheckRevenue: boolean
      canCheckVisitors: boolean
      canViewUsers: boolean
      canViewSales: boolean
      canVeiwAdmins: boolean
      canVeiwTotalproducts: boolean
      canVeiwTotalCategories: boolean
      posterImageUrl: Prisma.JsonValue | null
      role: string
      createdAt: Date | null
      updatedAt: Date | null
      last_editedBy: string | null
    }, ExtArgs["result"]["admins"]>
    composites: {}
  }

  type AdminsGetPayload<S extends boolean | null | undefined | AdminsDefaultArgs> = $Result.GetResult<Prisma.$AdminsPayload, S>

  type AdminsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminsCountAggregateInputType | true
    }

  export interface AdminsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admins'], meta: { name: 'Admins' } }
    /**
     * Find zero or one Admins that matches the filter.
     * @param {AdminsFindUniqueArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminsFindUniqueArgs>(args: SelectSubset<T, AdminsFindUniqueArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminsFindUniqueOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminsFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsFindFirstArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminsFindFirstArgs>(args?: SelectSubset<T, AdminsFindFirstArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsFindFirstOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminsFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admins.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admins.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminsWithIdOnly = await prisma.admins.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminsFindManyArgs>(args?: SelectSubset<T, AdminsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admins.
     * @param {AdminsCreateArgs} args - Arguments to create a Admins.
     * @example
     * // Create one Admins
     * const Admins = await prisma.admins.create({
     *   data: {
     *     // ... data to create a Admins
     *   }
     * })
     * 
     */
    create<T extends AdminsCreateArgs>(args: SelectSubset<T, AdminsCreateArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminsCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admins = await prisma.admins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminsCreateManyArgs>(args?: SelectSubset<T, AdminsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminsCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admins = await prisma.admins.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminsWithIdOnly = await prisma.admins.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminsCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admins.
     * @param {AdminsDeleteArgs} args - Arguments to delete one Admins.
     * @example
     * // Delete one Admins
     * const Admins = await prisma.admins.delete({
     *   where: {
     *     // ... filter to delete one Admins
     *   }
     * })
     * 
     */
    delete<T extends AdminsDeleteArgs>(args: SelectSubset<T, AdminsDeleteArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admins.
     * @param {AdminsUpdateArgs} args - Arguments to update one Admins.
     * @example
     * // Update one Admins
     * const admins = await prisma.admins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminsUpdateArgs>(args: SelectSubset<T, AdminsUpdateArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminsDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminsDeleteManyArgs>(args?: SelectSubset<T, AdminsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admins = await prisma.admins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminsUpdateManyArgs>(args: SelectSubset<T, AdminsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminsUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admins = await prisma.admins.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminsWithIdOnly = await prisma.admins.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminsUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admins.
     * @param {AdminsUpsertArgs} args - Arguments to update or create a Admins.
     * @example
     * // Update or create a Admins
     * const admins = await prisma.admins.upsert({
     *   create: {
     *     // ... data to create a Admins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admins we want to update
     *   }
     * })
     */
    upsert<T extends AdminsUpsertArgs>(args: SelectSubset<T, AdminsUpsertArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admins.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminsCountArgs>(
      args?: Subset<T, AdminsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminsAggregateArgs>(args: Subset<T, AdminsAggregateArgs>): Prisma.PrismaPromise<GetAdminsAggregateType<T>>

    /**
     * Group by Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminsGroupByArgs['orderBy'] }
        : { orderBy?: AdminsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admins model
   */
  readonly fields: AdminsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admins model
   */
  interface AdminsFieldRefs {
    readonly id: FieldRef<"Admins", 'Int'>
    readonly fullname: FieldRef<"Admins", 'String'>
    readonly email: FieldRef<"Admins", 'String'>
    readonly password: FieldRef<"Admins", 'String'>
    readonly canAddProduct: FieldRef<"Admins", 'Boolean'>
    readonly canEditProduct: FieldRef<"Admins", 'Boolean'>
    readonly canDeleteProduct: FieldRef<"Admins", 'Boolean'>
    readonly canAddCategory: FieldRef<"Admins", 'Boolean'>
    readonly canDeleteCategory: FieldRef<"Admins", 'Boolean'>
    readonly canEditCategory: FieldRef<"Admins", 'Boolean'>
    readonly canCheckProfit: FieldRef<"Admins", 'Boolean'>
    readonly canCheckRevenue: FieldRef<"Admins", 'Boolean'>
    readonly canCheckVisitors: FieldRef<"Admins", 'Boolean'>
    readonly canViewUsers: FieldRef<"Admins", 'Boolean'>
    readonly canViewSales: FieldRef<"Admins", 'Boolean'>
    readonly canVeiwAdmins: FieldRef<"Admins", 'Boolean'>
    readonly canVeiwTotalproducts: FieldRef<"Admins", 'Boolean'>
    readonly canVeiwTotalCategories: FieldRef<"Admins", 'Boolean'>
    readonly posterImageUrl: FieldRef<"Admins", 'Json'>
    readonly role: FieldRef<"Admins", 'String'>
    readonly createdAt: FieldRef<"Admins", 'DateTime'>
    readonly updatedAt: FieldRef<"Admins", 'DateTime'>
    readonly last_editedBy: FieldRef<"Admins", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admins findUnique
   */
  export type AdminsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins findUniqueOrThrow
   */
  export type AdminsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins findFirst
   */
  export type AdminsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * Admins findFirstOrThrow
   */
  export type AdminsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * Admins findMany
   */
  export type AdminsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * Admins create
   */
  export type AdminsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * The data needed to create a Admins.
     */
    data: XOR<AdminsCreateInput, AdminsUncheckedCreateInput>
  }

  /**
   * Admins createMany
   */
  export type AdminsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminsCreateManyInput | AdminsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admins createManyAndReturn
   */
  export type AdminsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminsCreateManyInput | AdminsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admins update
   */
  export type AdminsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * The data needed to update a Admins.
     */
    data: XOR<AdminsUpdateInput, AdminsUncheckedUpdateInput>
    /**
     * Choose, which Admins to update.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins updateMany
   */
  export type AdminsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminsUpdateManyMutationInput, AdminsUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminsWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admins updateManyAndReturn
   */
  export type AdminsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminsUpdateManyMutationInput, AdminsUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminsWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admins upsert
   */
  export type AdminsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * The filter to search for the Admins to update in case it exists.
     */
    where: AdminsWhereUniqueInput
    /**
     * In case the Admins found by the `where` argument doesn't exist, create a new Admins with this data.
     */
    create: XOR<AdminsCreateInput, AdminsUncheckedCreateInput>
    /**
     * In case the Admins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminsUpdateInput, AdminsUncheckedUpdateInput>
  }

  /**
   * Admins delete
   */
  export type AdminsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Filter which Admins to delete.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins deleteMany
   */
  export type AdminsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminsWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admins without action
   */
  export type AdminsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    posterImageUrl: 'posterImageUrl',
    last_editedBy: 'last_editedBy',
    short_description: 'short_description',
    custom_url: 'custom_url',
    Banners: 'Banners',
    BannerText: 'BannerText',
    BannerHeading: 'BannerHeading',
    RecallUrl: 'RecallUrl',
    breadCrum: 'breadCrum',
    topHeading: 'topHeading',
    topDescription: 'topDescription',
    categoryHeroImages: 'categoryHeroImages',
    categoryHeroToptext: 'categoryHeroToptext',
    categoryHeroHeading: 'categoryHeroHeading',
    categoryHeroText: 'categoryHeroText',
    categoryFaqs: 'categoryFaqs',
    leftHeading: 'leftHeading',
    categoryText: 'categoryText',
    Heading: 'Heading',
    paras: 'paras',
    bodyHeading: 'bodyHeading',
    bodyMainHeading: 'bodyMainHeading',
    bodyText: 'bodyText',
    Bannerdiscount: 'Bannerdiscount',
    salesBannerHeading: 'salesBannerHeading',
    paraText: 'paraText',
    Bannercounter: 'Bannercounter',
    Product_Section_heading: 'Product_Section_heading',
    bottomText: 'bottomText',
    explore_Heading: 'explore_Heading',
    explore_main_heading: 'explore_main_heading',
    explore_description: 'explore_description',
    Canonical_Tag: 'Canonical_Tag',
    Meta_Description: 'Meta_Description',
    Meta_Title: 'Meta_Title'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const AdminsScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    password: 'password',
    canAddProduct: 'canAddProduct',
    canEditProduct: 'canEditProduct',
    canDeleteProduct: 'canDeleteProduct',
    canAddCategory: 'canAddCategory',
    canDeleteCategory: 'canDeleteCategory',
    canEditCategory: 'canEditCategory',
    canCheckProfit: 'canCheckProfit',
    canCheckRevenue: 'canCheckRevenue',
    canCheckVisitors: 'canCheckVisitors',
    canViewUsers: 'canViewUsers',
    canViewSales: 'canViewSales',
    canVeiwAdmins: 'canVeiwAdmins',
    canVeiwTotalproducts: 'canVeiwTotalproducts',
    canVeiwTotalCategories: 'canVeiwTotalCategories',
    posterImageUrl: 'posterImageUrl',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    last_editedBy: 'last_editedBy'
  };

  export type AdminsScalarFieldEnum = (typeof AdminsScalarFieldEnum)[keyof typeof AdminsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: IntFilter<"categories"> | number
    name?: StringFilter<"categories"> | string
    description?: StringNullableFilter<"categories"> | string | null
    createdAt?: DateTimeNullableFilter<"categories"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"categories"> | Date | string | null
    posterImageUrl?: JsonFilter<"categories">
    last_editedBy?: StringNullableFilter<"categories"> | string | null
    short_description?: StringNullableFilter<"categories"> | string | null
    custom_url?: StringFilter<"categories"> | string
    Banners?: JsonNullableFilter<"categories">
    BannerText?: StringNullableFilter<"categories"> | string | null
    BannerHeading?: StringNullableFilter<"categories"> | string | null
    RecallUrl?: StringNullableFilter<"categories"> | string | null
    breadCrum?: StringNullableFilter<"categories"> | string | null
    topHeading?: StringNullableFilter<"categories"> | string | null
    topDescription?: StringNullableFilter<"categories"> | string | null
    categoryHeroImages?: JsonNullableListFilter<"categories">
    categoryHeroToptext?: StringNullableFilter<"categories"> | string | null
    categoryHeroHeading?: StringNullableFilter<"categories"> | string | null
    categoryHeroText?: JsonNullableListFilter<"categories">
    categoryFaqs?: JsonNullableListFilter<"categories">
    leftHeading?: StringNullableFilter<"categories"> | string | null
    categoryText?: JsonNullableListFilter<"categories">
    Heading?: StringNullableFilter<"categories"> | string | null
    paras?: JsonNullableListFilter<"categories">
    bodyHeading?: StringNullableFilter<"categories"> | string | null
    bodyMainHeading?: StringNullableFilter<"categories"> | string | null
    bodyText?: StringNullableFilter<"categories"> | string | null
    Bannerdiscount?: StringNullableFilter<"categories"> | string | null
    salesBannerHeading?: StringNullableFilter<"categories"> | string | null
    paraText?: StringNullableFilter<"categories"> | string | null
    Bannercounter?: DateTimeNullableFilter<"categories"> | Date | string | null
    Product_Section_heading?: StringNullableFilter<"categories"> | string | null
    bottomText?: StringNullableFilter<"categories"> | string | null
    explore_Heading?: StringNullableFilter<"categories"> | string | null
    explore_main_heading?: StringNullableFilter<"categories"> | string | null
    explore_description?: StringNullableFilter<"categories"> | string | null
    Canonical_Tag?: StringNullableFilter<"categories"> | string | null
    Meta_Description?: StringNullableFilter<"categories"> | string | null
    Meta_Title?: StringNullableFilter<"categories"> | string | null
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    posterImageUrl?: SortOrder
    last_editedBy?: SortOrderInput | SortOrder
    short_description?: SortOrderInput | SortOrder
    custom_url?: SortOrder
    Banners?: SortOrderInput | SortOrder
    BannerText?: SortOrderInput | SortOrder
    BannerHeading?: SortOrderInput | SortOrder
    RecallUrl?: SortOrderInput | SortOrder
    breadCrum?: SortOrderInput | SortOrder
    topHeading?: SortOrderInput | SortOrder
    topDescription?: SortOrderInput | SortOrder
    categoryHeroImages?: SortOrder
    categoryHeroToptext?: SortOrderInput | SortOrder
    categoryHeroHeading?: SortOrderInput | SortOrder
    categoryHeroText?: SortOrder
    categoryFaqs?: SortOrder
    leftHeading?: SortOrderInput | SortOrder
    categoryText?: SortOrder
    Heading?: SortOrderInput | SortOrder
    paras?: SortOrder
    bodyHeading?: SortOrderInput | SortOrder
    bodyMainHeading?: SortOrderInput | SortOrder
    bodyText?: SortOrderInput | SortOrder
    Bannerdiscount?: SortOrderInput | SortOrder
    salesBannerHeading?: SortOrderInput | SortOrder
    paraText?: SortOrderInput | SortOrder
    Bannercounter?: SortOrderInput | SortOrder
    Product_Section_heading?: SortOrderInput | SortOrder
    bottomText?: SortOrderInput | SortOrder
    explore_Heading?: SortOrderInput | SortOrder
    explore_main_heading?: SortOrderInput | SortOrder
    explore_description?: SortOrderInput | SortOrder
    Canonical_Tag?: SortOrderInput | SortOrder
    Meta_Description?: SortOrderInput | SortOrder
    Meta_Title?: SortOrderInput | SortOrder
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    description?: StringNullableFilter<"categories"> | string | null
    createdAt?: DateTimeNullableFilter<"categories"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"categories"> | Date | string | null
    posterImageUrl?: JsonFilter<"categories">
    last_editedBy?: StringNullableFilter<"categories"> | string | null
    short_description?: StringNullableFilter<"categories"> | string | null
    custom_url?: StringFilter<"categories"> | string
    Banners?: JsonNullableFilter<"categories">
    BannerText?: StringNullableFilter<"categories"> | string | null
    BannerHeading?: StringNullableFilter<"categories"> | string | null
    RecallUrl?: StringNullableFilter<"categories"> | string | null
    breadCrum?: StringNullableFilter<"categories"> | string | null
    topHeading?: StringNullableFilter<"categories"> | string | null
    topDescription?: StringNullableFilter<"categories"> | string | null
    categoryHeroImages?: JsonNullableListFilter<"categories">
    categoryHeroToptext?: StringNullableFilter<"categories"> | string | null
    categoryHeroHeading?: StringNullableFilter<"categories"> | string | null
    categoryHeroText?: JsonNullableListFilter<"categories">
    categoryFaqs?: JsonNullableListFilter<"categories">
    leftHeading?: StringNullableFilter<"categories"> | string | null
    categoryText?: JsonNullableListFilter<"categories">
    Heading?: StringNullableFilter<"categories"> | string | null
    paras?: JsonNullableListFilter<"categories">
    bodyHeading?: StringNullableFilter<"categories"> | string | null
    bodyMainHeading?: StringNullableFilter<"categories"> | string | null
    bodyText?: StringNullableFilter<"categories"> | string | null
    Bannerdiscount?: StringNullableFilter<"categories"> | string | null
    salesBannerHeading?: StringNullableFilter<"categories"> | string | null
    paraText?: StringNullableFilter<"categories"> | string | null
    Bannercounter?: DateTimeNullableFilter<"categories"> | Date | string | null
    Product_Section_heading?: StringNullableFilter<"categories"> | string | null
    bottomText?: StringNullableFilter<"categories"> | string | null
    explore_Heading?: StringNullableFilter<"categories"> | string | null
    explore_main_heading?: StringNullableFilter<"categories"> | string | null
    explore_description?: StringNullableFilter<"categories"> | string | null
    Canonical_Tag?: StringNullableFilter<"categories"> | string | null
    Meta_Description?: StringNullableFilter<"categories"> | string | null
    Meta_Title?: StringNullableFilter<"categories"> | string | null
  }, "id" | "name">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    posterImageUrl?: SortOrder
    last_editedBy?: SortOrderInput | SortOrder
    short_description?: SortOrderInput | SortOrder
    custom_url?: SortOrder
    Banners?: SortOrderInput | SortOrder
    BannerText?: SortOrderInput | SortOrder
    BannerHeading?: SortOrderInput | SortOrder
    RecallUrl?: SortOrderInput | SortOrder
    breadCrum?: SortOrderInput | SortOrder
    topHeading?: SortOrderInput | SortOrder
    topDescription?: SortOrderInput | SortOrder
    categoryHeroImages?: SortOrder
    categoryHeroToptext?: SortOrderInput | SortOrder
    categoryHeroHeading?: SortOrderInput | SortOrder
    categoryHeroText?: SortOrder
    categoryFaqs?: SortOrder
    leftHeading?: SortOrderInput | SortOrder
    categoryText?: SortOrder
    Heading?: SortOrderInput | SortOrder
    paras?: SortOrder
    bodyHeading?: SortOrderInput | SortOrder
    bodyMainHeading?: SortOrderInput | SortOrder
    bodyText?: SortOrderInput | SortOrder
    Bannerdiscount?: SortOrderInput | SortOrder
    salesBannerHeading?: SortOrderInput | SortOrder
    paraText?: SortOrderInput | SortOrder
    Bannercounter?: SortOrderInput | SortOrder
    Product_Section_heading?: SortOrderInput | SortOrder
    bottomText?: SortOrderInput | SortOrder
    explore_Heading?: SortOrderInput | SortOrder
    explore_main_heading?: SortOrderInput | SortOrder
    explore_description?: SortOrderInput | SortOrder
    Canonical_Tag?: SortOrderInput | SortOrder
    Meta_Description?: SortOrderInput | SortOrder
    Meta_Title?: SortOrderInput | SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categories"> | number
    name?: StringWithAggregatesFilter<"categories"> | string
    description?: StringNullableWithAggregatesFilter<"categories"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null
    posterImageUrl?: JsonWithAggregatesFilter<"categories">
    last_editedBy?: StringNullableWithAggregatesFilter<"categories"> | string | null
    short_description?: StringNullableWithAggregatesFilter<"categories"> | string | null
    custom_url?: StringWithAggregatesFilter<"categories"> | string
    Banners?: JsonNullableWithAggregatesFilter<"categories">
    BannerText?: StringNullableWithAggregatesFilter<"categories"> | string | null
    BannerHeading?: StringNullableWithAggregatesFilter<"categories"> | string | null
    RecallUrl?: StringNullableWithAggregatesFilter<"categories"> | string | null
    breadCrum?: StringNullableWithAggregatesFilter<"categories"> | string | null
    topHeading?: StringNullableWithAggregatesFilter<"categories"> | string | null
    topDescription?: StringNullableWithAggregatesFilter<"categories"> | string | null
    categoryHeroImages?: JsonNullableListFilter<"categories">
    categoryHeroToptext?: StringNullableWithAggregatesFilter<"categories"> | string | null
    categoryHeroHeading?: StringNullableWithAggregatesFilter<"categories"> | string | null
    categoryHeroText?: JsonNullableListFilter<"categories">
    categoryFaqs?: JsonNullableListFilter<"categories">
    leftHeading?: StringNullableWithAggregatesFilter<"categories"> | string | null
    categoryText?: JsonNullableListFilter<"categories">
    Heading?: StringNullableWithAggregatesFilter<"categories"> | string | null
    paras?: JsonNullableListFilter<"categories">
    bodyHeading?: StringNullableWithAggregatesFilter<"categories"> | string | null
    bodyMainHeading?: StringNullableWithAggregatesFilter<"categories"> | string | null
    bodyText?: StringNullableWithAggregatesFilter<"categories"> | string | null
    Bannerdiscount?: StringNullableWithAggregatesFilter<"categories"> | string | null
    salesBannerHeading?: StringNullableWithAggregatesFilter<"categories"> | string | null
    paraText?: StringNullableWithAggregatesFilter<"categories"> | string | null
    Bannercounter?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null
    Product_Section_heading?: StringNullableWithAggregatesFilter<"categories"> | string | null
    bottomText?: StringNullableWithAggregatesFilter<"categories"> | string | null
    explore_Heading?: StringNullableWithAggregatesFilter<"categories"> | string | null
    explore_main_heading?: StringNullableWithAggregatesFilter<"categories"> | string | null
    explore_description?: StringNullableWithAggregatesFilter<"categories"> | string | null
    Canonical_Tag?: StringNullableWithAggregatesFilter<"categories"> | string | null
    Meta_Description?: StringNullableWithAggregatesFilter<"categories"> | string | null
    Meta_Title?: StringNullableWithAggregatesFilter<"categories"> | string | null
  }

  export type AdminsWhereInput = {
    AND?: AdminsWhereInput | AdminsWhereInput[]
    OR?: AdminsWhereInput[]
    NOT?: AdminsWhereInput | AdminsWhereInput[]
    id?: IntFilter<"Admins"> | number
    fullname?: StringFilter<"Admins"> | string
    email?: StringFilter<"Admins"> | string
    password?: StringFilter<"Admins"> | string
    canAddProduct?: BoolFilter<"Admins"> | boolean
    canEditProduct?: BoolFilter<"Admins"> | boolean
    canDeleteProduct?: BoolFilter<"Admins"> | boolean
    canAddCategory?: BoolFilter<"Admins"> | boolean
    canDeleteCategory?: BoolFilter<"Admins"> | boolean
    canEditCategory?: BoolFilter<"Admins"> | boolean
    canCheckProfit?: BoolFilter<"Admins"> | boolean
    canCheckRevenue?: BoolFilter<"Admins"> | boolean
    canCheckVisitors?: BoolFilter<"Admins"> | boolean
    canViewUsers?: BoolFilter<"Admins"> | boolean
    canViewSales?: BoolFilter<"Admins"> | boolean
    canVeiwAdmins?: BoolFilter<"Admins"> | boolean
    canVeiwTotalproducts?: BoolFilter<"Admins"> | boolean
    canVeiwTotalCategories?: BoolFilter<"Admins"> | boolean
    posterImageUrl?: JsonNullableFilter<"Admins">
    role?: StringFilter<"Admins"> | string
    createdAt?: DateTimeNullableFilter<"Admins"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Admins"> | Date | string | null
    last_editedBy?: StringNullableFilter<"Admins"> | string | null
  }

  export type AdminsOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    canAddProduct?: SortOrder
    canEditProduct?: SortOrder
    canDeleteProduct?: SortOrder
    canAddCategory?: SortOrder
    canDeleteCategory?: SortOrder
    canEditCategory?: SortOrder
    canCheckProfit?: SortOrder
    canCheckRevenue?: SortOrder
    canCheckVisitors?: SortOrder
    canViewUsers?: SortOrder
    canViewSales?: SortOrder
    canVeiwAdmins?: SortOrder
    canVeiwTotalproducts?: SortOrder
    canVeiwTotalCategories?: SortOrder
    posterImageUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    last_editedBy?: SortOrderInput | SortOrder
  }

  export type AdminsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminsWhereInput | AdminsWhereInput[]
    OR?: AdminsWhereInput[]
    NOT?: AdminsWhereInput | AdminsWhereInput[]
    fullname?: StringFilter<"Admins"> | string
    password?: StringFilter<"Admins"> | string
    canAddProduct?: BoolFilter<"Admins"> | boolean
    canEditProduct?: BoolFilter<"Admins"> | boolean
    canDeleteProduct?: BoolFilter<"Admins"> | boolean
    canAddCategory?: BoolFilter<"Admins"> | boolean
    canDeleteCategory?: BoolFilter<"Admins"> | boolean
    canEditCategory?: BoolFilter<"Admins"> | boolean
    canCheckProfit?: BoolFilter<"Admins"> | boolean
    canCheckRevenue?: BoolFilter<"Admins"> | boolean
    canCheckVisitors?: BoolFilter<"Admins"> | boolean
    canViewUsers?: BoolFilter<"Admins"> | boolean
    canViewSales?: BoolFilter<"Admins"> | boolean
    canVeiwAdmins?: BoolFilter<"Admins"> | boolean
    canVeiwTotalproducts?: BoolFilter<"Admins"> | boolean
    canVeiwTotalCategories?: BoolFilter<"Admins"> | boolean
    posterImageUrl?: JsonNullableFilter<"Admins">
    role?: StringFilter<"Admins"> | string
    createdAt?: DateTimeNullableFilter<"Admins"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Admins"> | Date | string | null
    last_editedBy?: StringNullableFilter<"Admins"> | string | null
  }, "id" | "email">

  export type AdminsOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    canAddProduct?: SortOrder
    canEditProduct?: SortOrder
    canDeleteProduct?: SortOrder
    canAddCategory?: SortOrder
    canDeleteCategory?: SortOrder
    canEditCategory?: SortOrder
    canCheckProfit?: SortOrder
    canCheckRevenue?: SortOrder
    canCheckVisitors?: SortOrder
    canViewUsers?: SortOrder
    canViewSales?: SortOrder
    canVeiwAdmins?: SortOrder
    canVeiwTotalproducts?: SortOrder
    canVeiwTotalCategories?: SortOrder
    posterImageUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    last_editedBy?: SortOrderInput | SortOrder
    _count?: AdminsCountOrderByAggregateInput
    _avg?: AdminsAvgOrderByAggregateInput
    _max?: AdminsMaxOrderByAggregateInput
    _min?: AdminsMinOrderByAggregateInput
    _sum?: AdminsSumOrderByAggregateInput
  }

  export type AdminsScalarWhereWithAggregatesInput = {
    AND?: AdminsScalarWhereWithAggregatesInput | AdminsScalarWhereWithAggregatesInput[]
    OR?: AdminsScalarWhereWithAggregatesInput[]
    NOT?: AdminsScalarWhereWithAggregatesInput | AdminsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admins"> | number
    fullname?: StringWithAggregatesFilter<"Admins"> | string
    email?: StringWithAggregatesFilter<"Admins"> | string
    password?: StringWithAggregatesFilter<"Admins"> | string
    canAddProduct?: BoolWithAggregatesFilter<"Admins"> | boolean
    canEditProduct?: BoolWithAggregatesFilter<"Admins"> | boolean
    canDeleteProduct?: BoolWithAggregatesFilter<"Admins"> | boolean
    canAddCategory?: BoolWithAggregatesFilter<"Admins"> | boolean
    canDeleteCategory?: BoolWithAggregatesFilter<"Admins"> | boolean
    canEditCategory?: BoolWithAggregatesFilter<"Admins"> | boolean
    canCheckProfit?: BoolWithAggregatesFilter<"Admins"> | boolean
    canCheckRevenue?: BoolWithAggregatesFilter<"Admins"> | boolean
    canCheckVisitors?: BoolWithAggregatesFilter<"Admins"> | boolean
    canViewUsers?: BoolWithAggregatesFilter<"Admins"> | boolean
    canViewSales?: BoolWithAggregatesFilter<"Admins"> | boolean
    canVeiwAdmins?: BoolWithAggregatesFilter<"Admins"> | boolean
    canVeiwTotalproducts?: BoolWithAggregatesFilter<"Admins"> | boolean
    canVeiwTotalCategories?: BoolWithAggregatesFilter<"Admins"> | boolean
    posterImageUrl?: JsonNullableWithAggregatesFilter<"Admins">
    role?: StringWithAggregatesFilter<"Admins"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Admins"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Admins"> | Date | string | null
    last_editedBy?: StringNullableWithAggregatesFilter<"Admins"> | string | null
  }

  export type categoriesCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    posterImageUrl: JsonNullValueInput | InputJsonValue
    last_editedBy?: string | null
    short_description?: string | null
    custom_url: string
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: string | null
    BannerHeading?: string | null
    RecallUrl?: string | null
    breadCrum?: string | null
    topHeading?: string | null
    topDescription?: string | null
    categoryHeroImages?: categoriesCreatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: string | null
    categoryHeroHeading?: string | null
    categoryHeroText?: categoriesCreatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: categoriesCreatecategoryFaqsInput | InputJsonValue[]
    leftHeading?: string | null
    categoryText?: categoriesCreatecategoryTextInput | InputJsonValue[]
    Heading?: string | null
    paras?: categoriesCreateparasInput | InputJsonValue[]
    bodyHeading?: string | null
    bodyMainHeading?: string | null
    bodyText?: string | null
    Bannerdiscount?: string | null
    salesBannerHeading?: string | null
    paraText?: string | null
    Bannercounter?: Date | string | null
    Product_Section_heading?: string | null
    bottomText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
  }

  export type categoriesUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    posterImageUrl: JsonNullValueInput | InputJsonValue
    last_editedBy?: string | null
    short_description?: string | null
    custom_url: string
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: string | null
    BannerHeading?: string | null
    RecallUrl?: string | null
    breadCrum?: string | null
    topHeading?: string | null
    topDescription?: string | null
    categoryHeroImages?: categoriesCreatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: string | null
    categoryHeroHeading?: string | null
    categoryHeroText?: categoriesCreatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: categoriesCreatecategoryFaqsInput | InputJsonValue[]
    leftHeading?: string | null
    categoryText?: categoriesCreatecategoryTextInput | InputJsonValue[]
    Heading?: string | null
    paras?: categoriesCreateparasInput | InputJsonValue[]
    bodyHeading?: string | null
    bodyMainHeading?: string | null
    bodyText?: string | null
    Bannerdiscount?: string | null
    salesBannerHeading?: string | null
    paraText?: string | null
    Bannercounter?: Date | string | null
    Product_Section_heading?: string | null
    bottomText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
  }

  export type categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posterImageUrl?: JsonNullValueInput | InputJsonValue
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    RecallUrl?: NullableStringFieldUpdateOperationsInput | string | null
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    topHeading?: NullableStringFieldUpdateOperationsInput | string | null
    topDescription?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroImages?: categoriesUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: categoriesUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: categoriesUpdatecategoryFaqsInput | InputJsonValue[]
    leftHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryText?: categoriesUpdatecategoryTextInput | InputJsonValue[]
    Heading?: NullableStringFieldUpdateOperationsInput | string | null
    paras?: categoriesUpdateparasInput | InputJsonValue[]
    bodyHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyMainHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    Bannerdiscount?: NullableStringFieldUpdateOperationsInput | string | null
    salesBannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    paraText?: NullableStringFieldUpdateOperationsInput | string | null
    Bannercounter?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posterImageUrl?: JsonNullValueInput | InputJsonValue
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    RecallUrl?: NullableStringFieldUpdateOperationsInput | string | null
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    topHeading?: NullableStringFieldUpdateOperationsInput | string | null
    topDescription?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroImages?: categoriesUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: categoriesUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: categoriesUpdatecategoryFaqsInput | InputJsonValue[]
    leftHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryText?: categoriesUpdatecategoryTextInput | InputJsonValue[]
    Heading?: NullableStringFieldUpdateOperationsInput | string | null
    paras?: categoriesUpdateparasInput | InputJsonValue[]
    bodyHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyMainHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    Bannerdiscount?: NullableStringFieldUpdateOperationsInput | string | null
    salesBannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    paraText?: NullableStringFieldUpdateOperationsInput | string | null
    Bannercounter?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    posterImageUrl: JsonNullValueInput | InputJsonValue
    last_editedBy?: string | null
    short_description?: string | null
    custom_url: string
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: string | null
    BannerHeading?: string | null
    RecallUrl?: string | null
    breadCrum?: string | null
    topHeading?: string | null
    topDescription?: string | null
    categoryHeroImages?: categoriesCreatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: string | null
    categoryHeroHeading?: string | null
    categoryHeroText?: categoriesCreatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: categoriesCreatecategoryFaqsInput | InputJsonValue[]
    leftHeading?: string | null
    categoryText?: categoriesCreatecategoryTextInput | InputJsonValue[]
    Heading?: string | null
    paras?: categoriesCreateparasInput | InputJsonValue[]
    bodyHeading?: string | null
    bodyMainHeading?: string | null
    bodyText?: string | null
    Bannerdiscount?: string | null
    salesBannerHeading?: string | null
    paraText?: string | null
    Bannercounter?: Date | string | null
    Product_Section_heading?: string | null
    bottomText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
  }

  export type categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posterImageUrl?: JsonNullValueInput | InputJsonValue
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    RecallUrl?: NullableStringFieldUpdateOperationsInput | string | null
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    topHeading?: NullableStringFieldUpdateOperationsInput | string | null
    topDescription?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroImages?: categoriesUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: categoriesUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: categoriesUpdatecategoryFaqsInput | InputJsonValue[]
    leftHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryText?: categoriesUpdatecategoryTextInput | InputJsonValue[]
    Heading?: NullableStringFieldUpdateOperationsInput | string | null
    paras?: categoriesUpdateparasInput | InputJsonValue[]
    bodyHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyMainHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    Bannerdiscount?: NullableStringFieldUpdateOperationsInput | string | null
    salesBannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    paraText?: NullableStringFieldUpdateOperationsInput | string | null
    Bannercounter?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posterImageUrl?: JsonNullValueInput | InputJsonValue
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    RecallUrl?: NullableStringFieldUpdateOperationsInput | string | null
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    topHeading?: NullableStringFieldUpdateOperationsInput | string | null
    topDescription?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroImages?: categoriesUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: categoriesUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: categoriesUpdatecategoryFaqsInput | InputJsonValue[]
    leftHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryText?: categoriesUpdatecategoryTextInput | InputJsonValue[]
    Heading?: NullableStringFieldUpdateOperationsInput | string | null
    paras?: categoriesUpdateparasInput | InputJsonValue[]
    bodyHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyMainHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    Bannerdiscount?: NullableStringFieldUpdateOperationsInput | string | null
    salesBannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    paraText?: NullableStringFieldUpdateOperationsInput | string | null
    Bannercounter?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminsCreateInput = {
    fullname: string
    email: string
    password: string
    canAddProduct?: boolean
    canEditProduct?: boolean
    canDeleteProduct?: boolean
    canAddCategory?: boolean
    canDeleteCategory?: boolean
    canEditCategory?: boolean
    canCheckProfit?: boolean
    canCheckRevenue?: boolean
    canCheckVisitors?: boolean
    canViewUsers?: boolean
    canViewSales?: boolean
    canVeiwAdmins?: boolean
    canVeiwTotalproducts?: boolean
    canVeiwTotalCategories?: boolean
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    role?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    last_editedBy?: string | null
  }

  export type AdminsUncheckedCreateInput = {
    id?: number
    fullname: string
    email: string
    password: string
    canAddProduct?: boolean
    canEditProduct?: boolean
    canDeleteProduct?: boolean
    canAddCategory?: boolean
    canDeleteCategory?: boolean
    canEditCategory?: boolean
    canCheckProfit?: boolean
    canCheckRevenue?: boolean
    canCheckVisitors?: boolean
    canViewUsers?: boolean
    canViewSales?: boolean
    canVeiwAdmins?: boolean
    canVeiwTotalproducts?: boolean
    canVeiwTotalCategories?: boolean
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    role?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    last_editedBy?: string | null
  }

  export type AdminsUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    canAddProduct?: BoolFieldUpdateOperationsInput | boolean
    canEditProduct?: BoolFieldUpdateOperationsInput | boolean
    canDeleteProduct?: BoolFieldUpdateOperationsInput | boolean
    canAddCategory?: BoolFieldUpdateOperationsInput | boolean
    canDeleteCategory?: BoolFieldUpdateOperationsInput | boolean
    canEditCategory?: BoolFieldUpdateOperationsInput | boolean
    canCheckProfit?: BoolFieldUpdateOperationsInput | boolean
    canCheckRevenue?: BoolFieldUpdateOperationsInput | boolean
    canCheckVisitors?: BoolFieldUpdateOperationsInput | boolean
    canViewUsers?: BoolFieldUpdateOperationsInput | boolean
    canViewSales?: BoolFieldUpdateOperationsInput | boolean
    canVeiwAdmins?: BoolFieldUpdateOperationsInput | boolean
    canVeiwTotalproducts?: BoolFieldUpdateOperationsInput | boolean
    canVeiwTotalCategories?: BoolFieldUpdateOperationsInput | boolean
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    canAddProduct?: BoolFieldUpdateOperationsInput | boolean
    canEditProduct?: BoolFieldUpdateOperationsInput | boolean
    canDeleteProduct?: BoolFieldUpdateOperationsInput | boolean
    canAddCategory?: BoolFieldUpdateOperationsInput | boolean
    canDeleteCategory?: BoolFieldUpdateOperationsInput | boolean
    canEditCategory?: BoolFieldUpdateOperationsInput | boolean
    canCheckProfit?: BoolFieldUpdateOperationsInput | boolean
    canCheckRevenue?: BoolFieldUpdateOperationsInput | boolean
    canCheckVisitors?: BoolFieldUpdateOperationsInput | boolean
    canViewUsers?: BoolFieldUpdateOperationsInput | boolean
    canViewSales?: BoolFieldUpdateOperationsInput | boolean
    canVeiwAdmins?: BoolFieldUpdateOperationsInput | boolean
    canVeiwTotalproducts?: BoolFieldUpdateOperationsInput | boolean
    canVeiwTotalCategories?: BoolFieldUpdateOperationsInput | boolean
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminsCreateManyInput = {
    id?: number
    fullname: string
    email: string
    password: string
    canAddProduct?: boolean
    canEditProduct?: boolean
    canDeleteProduct?: boolean
    canAddCategory?: boolean
    canDeleteCategory?: boolean
    canEditCategory?: boolean
    canCheckProfit?: boolean
    canCheckRevenue?: boolean
    canCheckVisitors?: boolean
    canViewUsers?: boolean
    canViewSales?: boolean
    canVeiwAdmins?: boolean
    canVeiwTotalproducts?: boolean
    canVeiwTotalCategories?: boolean
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    role?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    last_editedBy?: string | null
  }

  export type AdminsUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    canAddProduct?: BoolFieldUpdateOperationsInput | boolean
    canEditProduct?: BoolFieldUpdateOperationsInput | boolean
    canDeleteProduct?: BoolFieldUpdateOperationsInput | boolean
    canAddCategory?: BoolFieldUpdateOperationsInput | boolean
    canDeleteCategory?: BoolFieldUpdateOperationsInput | boolean
    canEditCategory?: BoolFieldUpdateOperationsInput | boolean
    canCheckProfit?: BoolFieldUpdateOperationsInput | boolean
    canCheckRevenue?: BoolFieldUpdateOperationsInput | boolean
    canCheckVisitors?: BoolFieldUpdateOperationsInput | boolean
    canViewUsers?: BoolFieldUpdateOperationsInput | boolean
    canViewSales?: BoolFieldUpdateOperationsInput | boolean
    canVeiwAdmins?: BoolFieldUpdateOperationsInput | boolean
    canVeiwTotalproducts?: BoolFieldUpdateOperationsInput | boolean
    canVeiwTotalCategories?: BoolFieldUpdateOperationsInput | boolean
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    canAddProduct?: BoolFieldUpdateOperationsInput | boolean
    canEditProduct?: BoolFieldUpdateOperationsInput | boolean
    canDeleteProduct?: BoolFieldUpdateOperationsInput | boolean
    canAddCategory?: BoolFieldUpdateOperationsInput | boolean
    canDeleteCategory?: BoolFieldUpdateOperationsInput | boolean
    canEditCategory?: BoolFieldUpdateOperationsInput | boolean
    canCheckProfit?: BoolFieldUpdateOperationsInput | boolean
    canCheckRevenue?: BoolFieldUpdateOperationsInput | boolean
    canCheckVisitors?: BoolFieldUpdateOperationsInput | boolean
    canViewUsers?: BoolFieldUpdateOperationsInput | boolean
    canViewSales?: BoolFieldUpdateOperationsInput | boolean
    canVeiwAdmins?: BoolFieldUpdateOperationsInput | boolean
    canVeiwTotalproducts?: BoolFieldUpdateOperationsInput | boolean
    canVeiwTotalCategories?: BoolFieldUpdateOperationsInput | boolean
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableListFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    posterImageUrl?: SortOrder
    last_editedBy?: SortOrder
    short_description?: SortOrder
    custom_url?: SortOrder
    Banners?: SortOrder
    BannerText?: SortOrder
    BannerHeading?: SortOrder
    RecallUrl?: SortOrder
    breadCrum?: SortOrder
    topHeading?: SortOrder
    topDescription?: SortOrder
    categoryHeroImages?: SortOrder
    categoryHeroToptext?: SortOrder
    categoryHeroHeading?: SortOrder
    categoryHeroText?: SortOrder
    categoryFaqs?: SortOrder
    leftHeading?: SortOrder
    categoryText?: SortOrder
    Heading?: SortOrder
    paras?: SortOrder
    bodyHeading?: SortOrder
    bodyMainHeading?: SortOrder
    bodyText?: SortOrder
    Bannerdiscount?: SortOrder
    salesBannerHeading?: SortOrder
    paraText?: SortOrder
    Bannercounter?: SortOrder
    Product_Section_heading?: SortOrder
    bottomText?: SortOrder
    explore_Heading?: SortOrder
    explore_main_heading?: SortOrder
    explore_description?: SortOrder
    Canonical_Tag?: SortOrder
    Meta_Description?: SortOrder
    Meta_Title?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    last_editedBy?: SortOrder
    short_description?: SortOrder
    custom_url?: SortOrder
    BannerText?: SortOrder
    BannerHeading?: SortOrder
    RecallUrl?: SortOrder
    breadCrum?: SortOrder
    topHeading?: SortOrder
    topDescription?: SortOrder
    categoryHeroToptext?: SortOrder
    categoryHeroHeading?: SortOrder
    leftHeading?: SortOrder
    Heading?: SortOrder
    bodyHeading?: SortOrder
    bodyMainHeading?: SortOrder
    bodyText?: SortOrder
    Bannerdiscount?: SortOrder
    salesBannerHeading?: SortOrder
    paraText?: SortOrder
    Bannercounter?: SortOrder
    Product_Section_heading?: SortOrder
    bottomText?: SortOrder
    explore_Heading?: SortOrder
    explore_main_heading?: SortOrder
    explore_description?: SortOrder
    Canonical_Tag?: SortOrder
    Meta_Description?: SortOrder
    Meta_Title?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    last_editedBy?: SortOrder
    short_description?: SortOrder
    custom_url?: SortOrder
    BannerText?: SortOrder
    BannerHeading?: SortOrder
    RecallUrl?: SortOrder
    breadCrum?: SortOrder
    topHeading?: SortOrder
    topDescription?: SortOrder
    categoryHeroToptext?: SortOrder
    categoryHeroHeading?: SortOrder
    leftHeading?: SortOrder
    Heading?: SortOrder
    bodyHeading?: SortOrder
    bodyMainHeading?: SortOrder
    bodyText?: SortOrder
    Bannerdiscount?: SortOrder
    salesBannerHeading?: SortOrder
    paraText?: SortOrder
    Bannercounter?: SortOrder
    Product_Section_heading?: SortOrder
    bottomText?: SortOrder
    explore_Heading?: SortOrder
    explore_main_heading?: SortOrder
    explore_description?: SortOrder
    Canonical_Tag?: SortOrder
    Meta_Description?: SortOrder
    Meta_Title?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AdminsCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    canAddProduct?: SortOrder
    canEditProduct?: SortOrder
    canDeleteProduct?: SortOrder
    canAddCategory?: SortOrder
    canDeleteCategory?: SortOrder
    canEditCategory?: SortOrder
    canCheckProfit?: SortOrder
    canCheckRevenue?: SortOrder
    canCheckVisitors?: SortOrder
    canViewUsers?: SortOrder
    canViewSales?: SortOrder
    canVeiwAdmins?: SortOrder
    canVeiwTotalproducts?: SortOrder
    canVeiwTotalCategories?: SortOrder
    posterImageUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    last_editedBy?: SortOrder
  }

  export type AdminsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminsMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    canAddProduct?: SortOrder
    canEditProduct?: SortOrder
    canDeleteProduct?: SortOrder
    canAddCategory?: SortOrder
    canDeleteCategory?: SortOrder
    canEditCategory?: SortOrder
    canCheckProfit?: SortOrder
    canCheckRevenue?: SortOrder
    canCheckVisitors?: SortOrder
    canViewUsers?: SortOrder
    canViewSales?: SortOrder
    canVeiwAdmins?: SortOrder
    canVeiwTotalproducts?: SortOrder
    canVeiwTotalCategories?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    last_editedBy?: SortOrder
  }

  export type AdminsMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    canAddProduct?: SortOrder
    canEditProduct?: SortOrder
    canDeleteProduct?: SortOrder
    canAddCategory?: SortOrder
    canDeleteCategory?: SortOrder
    canEditCategory?: SortOrder
    canCheckProfit?: SortOrder
    canCheckRevenue?: SortOrder
    canCheckVisitors?: SortOrder
    canViewUsers?: SortOrder
    canViewSales?: SortOrder
    canVeiwAdmins?: SortOrder
    canVeiwTotalproducts?: SortOrder
    canVeiwTotalCategories?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    last_editedBy?: SortOrder
  }

  export type AdminsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type categoriesCreatecategoryHeroImagesInput = {
    set: InputJsonValue[]
  }

  export type categoriesCreatecategoryHeroTextInput = {
    set: InputJsonValue[]
  }

  export type categoriesCreatecategoryFaqsInput = {
    set: InputJsonValue[]
  }

  export type categoriesCreatecategoryTextInput = {
    set: InputJsonValue[]
  }

  export type categoriesCreateparasInput = {
    set: InputJsonValue[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type categoriesUpdatecategoryHeroImagesInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type categoriesUpdatecategoryHeroTextInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type categoriesUpdatecategoryFaqsInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type categoriesUpdatecategoryTextInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type categoriesUpdateparasInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}