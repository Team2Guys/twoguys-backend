
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
 * Model subCategories
 * 
 */
export type subCategories = $Result.DefaultSelection<Prisma.$subCategoriesPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model Admins
 * 
 */
export type Admins = $Result.DefaultSelection<Prisma.$AdminsPayload>
/**
 * Model Reviews
 * 
 */
export type Reviews = $Result.DefaultSelection<Prisma.$ReviewsPayload>
/**
 * Model SocialLinks
 * 
 */
export type SocialLinks = $Result.DefaultSelection<Prisma.$SocialLinksPayload>
/**
 * Model Appointments
 * 
 */
export type Appointments = $Result.DefaultSelection<Prisma.$AppointmentsPayload>

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
   * `prisma.subCategories`: Exposes CRUD operations for the **subCategories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubCategories
    * const subCategories = await prisma.subCategories.findMany()
    * ```
    */
  get subCategories(): Prisma.subCategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admins`: Exposes CRUD operations for the **Admins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admins.findMany()
    * ```
    */
  get admins(): Prisma.AdminsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **Reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.ReviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialLinks`: Exposes CRUD operations for the **SocialLinks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialLinks
    * const socialLinks = await prisma.socialLinks.findMany()
    * ```
    */
  get socialLinks(): Prisma.SocialLinksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointments`: Exposes CRUD operations for the **Appointments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointments.findMany()
    * ```
    */
  get appointments(): Prisma.AppointmentsDelegate<ExtArgs, ClientOptions>;
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
    subCategories: 'subCategories',
    Products: 'Products',
    Admins: 'Admins',
    Reviews: 'Reviews',
    SocialLinks: 'SocialLinks',
    Appointments: 'Appointments'
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
      modelProps: "categories" | "subCategories" | "products" | "admins" | "reviews" | "socialLinks" | "appointments"
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
      subCategories: {
        payload: Prisma.$subCategoriesPayload<ExtArgs>
        fields: Prisma.subCategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subCategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subCategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subCategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subCategoriesPayload>
          }
          findFirst: {
            args: Prisma.subCategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subCategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subCategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subCategoriesPayload>
          }
          findMany: {
            args: Prisma.subCategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subCategoriesPayload>[]
          }
          create: {
            args: Prisma.subCategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subCategoriesPayload>
          }
          createMany: {
            args: Prisma.subCategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.subCategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subCategoriesPayload>[]
          }
          delete: {
            args: Prisma.subCategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subCategoriesPayload>
          }
          update: {
            args: Prisma.subCategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subCategoriesPayload>
          }
          deleteMany: {
            args: Prisma.subCategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subCategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.subCategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subCategoriesPayload>[]
          }
          upsert: {
            args: Prisma.subCategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subCategoriesPayload>
          }
          aggregate: {
            args: Prisma.SubCategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubCategories>
          }
          groupBy: {
            args: Prisma.subCategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubCategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.subCategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<SubCategoriesCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
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
      Reviews: {
        payload: Prisma.$ReviewsPayload<ExtArgs>
        fields: Prisma.ReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findFirst: {
            args: Prisma.ReviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findMany: {
            args: Prisma.ReviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          create: {
            args: Prisma.ReviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          createMany: {
            args: Prisma.ReviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          delete: {
            args: Prisma.ReviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          update: {
            args: Prisma.ReviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          deleteMany: {
            args: Prisma.ReviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          upsert: {
            args: Prisma.ReviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.ReviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      SocialLinks: {
        payload: Prisma.$SocialLinksPayload<ExtArgs>
        fields: Prisma.SocialLinksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialLinksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialLinksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinksPayload>
          }
          findFirst: {
            args: Prisma.SocialLinksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialLinksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinksPayload>
          }
          findMany: {
            args: Prisma.SocialLinksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinksPayload>[]
          }
          create: {
            args: Prisma.SocialLinksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinksPayload>
          }
          createMany: {
            args: Prisma.SocialLinksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialLinksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinksPayload>[]
          }
          delete: {
            args: Prisma.SocialLinksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinksPayload>
          }
          update: {
            args: Prisma.SocialLinksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinksPayload>
          }
          deleteMany: {
            args: Prisma.SocialLinksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialLinksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialLinksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinksPayload>[]
          }
          upsert: {
            args: Prisma.SocialLinksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinksPayload>
          }
          aggregate: {
            args: Prisma.SocialLinksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialLinks>
          }
          groupBy: {
            args: Prisma.SocialLinksGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialLinksGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialLinksCountArgs<ExtArgs>
            result: $Utils.Optional<SocialLinksCountAggregateOutputType> | number
          }
        }
      }
      Appointments: {
        payload: Prisma.$AppointmentsPayload<ExtArgs>
        fields: Prisma.AppointmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          findFirst: {
            args: Prisma.AppointmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          findMany: {
            args: Prisma.AppointmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>[]
          }
          create: {
            args: Prisma.AppointmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          createMany: {
            args: Prisma.AppointmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>[]
          }
          delete: {
            args: Prisma.AppointmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          update: {
            args: Prisma.AppointmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          aggregate: {
            args: Prisma.AppointmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointments>
          }
          groupBy: {
            args: Prisma.AppointmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentsCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentsCountAggregateOutputType> | number
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
    subCategories?: subCategoriesOmit
    products?: ProductsOmit
    admins?: AdminsOmit
    reviews?: ReviewsOmit
    socialLinks?: SocialLinksOmit
    appointments?: AppointmentsOmit
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
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    subCategories: number
    products: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategories?: boolean | CategoriesCountOutputTypeCountSubCategoriesArgs
    products?: boolean | CategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subCategoriesWhereInput
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type SubCategoriesCountOutputType
   */

  export type SubCategoriesCountOutputType = {
    products: number
  }

  export type SubCategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | SubCategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * SubCategoriesCountOutputType without action
   */
  export type SubCategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoriesCountOutputType
     */
    select?: SubCategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubCategoriesCountOutputType without action
   */
  export type SubCategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


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
    seoSchema: string | null
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
    seoSchema: string | null
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
    salesBannerImage: number
    Product_Section_heading: number
    bottomText: number
    explore_Heading: number
    explore_main_heading: number
    explore_description: number
    Canonical_Tag: number
    Meta_Description: number
    Meta_Title: number
    seoSchema: number
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
    seoSchema?: true
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
    seoSchema?: true
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
    salesBannerImage?: true
    Product_Section_heading?: true
    bottomText?: true
    explore_Heading?: true
    explore_main_heading?: true
    explore_description?: true
    Canonical_Tag?: true
    Meta_Description?: true
    Meta_Title?: true
    seoSchema?: true
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
    salesBannerImage: JsonValue | null
    Product_Section_heading: string | null
    bottomText: string | null
    explore_Heading: string | null
    explore_main_heading: string | null
    explore_description: string | null
    Canonical_Tag: string | null
    Meta_Description: string | null
    Meta_Title: string | null
    seoSchema: string | null
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
    salesBannerImage?: boolean
    Product_Section_heading?: boolean
    bottomText?: boolean
    explore_Heading?: boolean
    explore_main_heading?: boolean
    explore_description?: boolean
    Canonical_Tag?: boolean
    Meta_Description?: boolean
    Meta_Title?: boolean
    seoSchema?: boolean
    subCategories?: boolean | categories$subCategoriesArgs<ExtArgs>
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
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
    salesBannerImage?: boolean
    Product_Section_heading?: boolean
    bottomText?: boolean
    explore_Heading?: boolean
    explore_main_heading?: boolean
    explore_description?: boolean
    Canonical_Tag?: boolean
    Meta_Description?: boolean
    Meta_Title?: boolean
    seoSchema?: boolean
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
    salesBannerImage?: boolean
    Product_Section_heading?: boolean
    bottomText?: boolean
    explore_Heading?: boolean
    explore_main_heading?: boolean
    explore_description?: boolean
    Canonical_Tag?: boolean
    Meta_Description?: boolean
    Meta_Title?: boolean
    seoSchema?: boolean
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
    salesBannerImage?: boolean
    Product_Section_heading?: boolean
    bottomText?: boolean
    explore_Heading?: boolean
    explore_main_heading?: boolean
    explore_description?: boolean
    Canonical_Tag?: boolean
    Meta_Description?: boolean
    Meta_Title?: boolean
    seoSchema?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "posterImageUrl" | "last_editedBy" | "short_description" | "custom_url" | "Banners" | "BannerText" | "BannerHeading" | "RecallUrl" | "breadCrum" | "topHeading" | "topDescription" | "categoryHeroImages" | "categoryHeroToptext" | "categoryHeroHeading" | "categoryHeroText" | "categoryFaqs" | "leftHeading" | "categoryText" | "Heading" | "paras" | "bodyHeading" | "bodyMainHeading" | "bodyText" | "Bannerdiscount" | "salesBannerHeading" | "paraText" | "Bannercounter" | "salesBannerImage" | "Product_Section_heading" | "bottomText" | "explore_Heading" | "explore_main_heading" | "explore_description" | "Canonical_Tag" | "Meta_Description" | "Meta_Title" | "seoSchema", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategories?: boolean | categories$subCategoriesArgs<ExtArgs>
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      subCategories: Prisma.$subCategoriesPayload<ExtArgs>[]
      products: Prisma.$ProductsPayload<ExtArgs>[]
    }
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
      salesBannerImage: Prisma.JsonValue | null
      Product_Section_heading: string | null
      bottomText: string | null
      explore_Heading: string | null
      explore_main_heading: string | null
      explore_description: string | null
      Canonical_Tag: string | null
      Meta_Description: string | null
      Meta_Title: string | null
      seoSchema: string | null
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
    subCategories<T extends categories$subCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, categories$subCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends categories$productsArgs<ExtArgs> = {}>(args?: Subset<T, categories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly salesBannerImage: FieldRef<"categories", 'Json'>
    readonly Product_Section_heading: FieldRef<"categories", 'String'>
    readonly bottomText: FieldRef<"categories", 'String'>
    readonly explore_Heading: FieldRef<"categories", 'String'>
    readonly explore_main_heading: FieldRef<"categories", 'String'>
    readonly explore_description: FieldRef<"categories", 'String'>
    readonly Canonical_Tag: FieldRef<"categories", 'String'>
    readonly Meta_Description: FieldRef<"categories", 'String'>
    readonly Meta_Title: FieldRef<"categories", 'String'>
    readonly seoSchema: FieldRef<"categories", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
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
   * categories.subCategories
   */
  export type categories$subCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategories
     */
    select?: subCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subCategories
     */
    omit?: subCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subCategoriesInclude<ExtArgs> | null
    where?: subCategoriesWhereInput
    orderBy?: subCategoriesOrderByWithRelationInput | subCategoriesOrderByWithRelationInput[]
    cursor?: subCategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoriesScalarFieldEnum | SubCategoriesScalarFieldEnum[]
  }

  /**
   * categories.products
   */
  export type categories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model subCategories
   */

  export type AggregateSubCategories = {
    _count: SubCategoriesCountAggregateOutputType | null
    _avg: SubCategoriesAvgAggregateOutputType | null
    _sum: SubCategoriesSumAggregateOutputType | null
    _min: SubCategoriesMinAggregateOutputType | null
    _max: SubCategoriesMaxAggregateOutputType | null
  }

  export type SubCategoriesAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type SubCategoriesSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type SubCategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    last_editedBy: string | null
    short_description: string | null
    custom_url: string | null
    categoryId: number | null
    breadCrum: string | null
    BannerText: string | null
    BannerHeading: string | null
    leftHeading: string | null
    categoryHeroToptext: string | null
    categoryHeroHeading: string | null
    collectionHeading: string | null
    collectionMainHeading: string | null
    Product_Section_heading: string | null
    bottomText: string | null
    bodyHeading: string | null
    bodyMainHeading: string | null
    bodyText: string | null
    explore_Heading: string | null
    explore_main_heading: string | null
    explore_description: string | null
    Canonical_Tag: string | null
    Meta_Description: string | null
    Meta_Title: string | null
    seoSchema: string | null
  }

  export type SubCategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    last_editedBy: string | null
    short_description: string | null
    custom_url: string | null
    categoryId: number | null
    breadCrum: string | null
    BannerText: string | null
    BannerHeading: string | null
    leftHeading: string | null
    categoryHeroToptext: string | null
    categoryHeroHeading: string | null
    collectionHeading: string | null
    collectionMainHeading: string | null
    Product_Section_heading: string | null
    bottomText: string | null
    bodyHeading: string | null
    bodyMainHeading: string | null
    bodyText: string | null
    explore_Heading: string | null
    explore_main_heading: string | null
    explore_description: string | null
    Canonical_Tag: string | null
    Meta_Description: string | null
    Meta_Title: string | null
    seoSchema: string | null
  }

  export type SubCategoriesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    posterImageUrl: number
    last_editedBy: number
    short_description: number
    custom_url: number
    categoryId: number
    breadCrum: number
    Banners: number
    BannerText: number
    BannerHeading: number
    leftHeading: number
    categoryText: number
    categoryHeroImages: number
    categoryHeroToptext: number
    categoryHeroHeading: number
    categoryHeroText: number
    categoryFaqs: number
    collectionHeading: number
    collectionMainHeading: number
    QualityHeadings: number
    QualityText: number
    QualityImages: number
    CustomHeading: number
    CustomText: number
    Product_Section_heading: number
    bottomText: number
    bodyHeading: number
    bodyMainHeading: number
    bodyText: number
    explore_Heading: number
    explore_main_heading: number
    explore_description: number
    professionalServiceImage: number
    Canonical_Tag: number
    Meta_Description: number
    Meta_Title: number
    seoSchema: number
    _all: number
  }


  export type SubCategoriesAvgAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type SubCategoriesSumAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type SubCategoriesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    last_editedBy?: true
    short_description?: true
    custom_url?: true
    categoryId?: true
    breadCrum?: true
    BannerText?: true
    BannerHeading?: true
    leftHeading?: true
    categoryHeroToptext?: true
    categoryHeroHeading?: true
    collectionHeading?: true
    collectionMainHeading?: true
    Product_Section_heading?: true
    bottomText?: true
    bodyHeading?: true
    bodyMainHeading?: true
    bodyText?: true
    explore_Heading?: true
    explore_main_heading?: true
    explore_description?: true
    Canonical_Tag?: true
    Meta_Description?: true
    Meta_Title?: true
    seoSchema?: true
  }

  export type SubCategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    last_editedBy?: true
    short_description?: true
    custom_url?: true
    categoryId?: true
    breadCrum?: true
    BannerText?: true
    BannerHeading?: true
    leftHeading?: true
    categoryHeroToptext?: true
    categoryHeroHeading?: true
    collectionHeading?: true
    collectionMainHeading?: true
    Product_Section_heading?: true
    bottomText?: true
    bodyHeading?: true
    bodyMainHeading?: true
    bodyText?: true
    explore_Heading?: true
    explore_main_heading?: true
    explore_description?: true
    Canonical_Tag?: true
    Meta_Description?: true
    Meta_Title?: true
    seoSchema?: true
  }

  export type SubCategoriesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    posterImageUrl?: true
    last_editedBy?: true
    short_description?: true
    custom_url?: true
    categoryId?: true
    breadCrum?: true
    Banners?: true
    BannerText?: true
    BannerHeading?: true
    leftHeading?: true
    categoryText?: true
    categoryHeroImages?: true
    categoryHeroToptext?: true
    categoryHeroHeading?: true
    categoryHeroText?: true
    categoryFaqs?: true
    collectionHeading?: true
    collectionMainHeading?: true
    QualityHeadings?: true
    QualityText?: true
    QualityImages?: true
    CustomHeading?: true
    CustomText?: true
    Product_Section_heading?: true
    bottomText?: true
    bodyHeading?: true
    bodyMainHeading?: true
    bodyText?: true
    explore_Heading?: true
    explore_main_heading?: true
    explore_description?: true
    professionalServiceImage?: true
    Canonical_Tag?: true
    Meta_Description?: true
    Meta_Title?: true
    seoSchema?: true
    _all?: true
  }

  export type SubCategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subCategories to aggregate.
     */
    where?: subCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subCategories to fetch.
     */
    orderBy?: subCategoriesOrderByWithRelationInput | subCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subCategories
    **/
    _count?: true | SubCategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubCategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubCategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubCategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubCategoriesMaxAggregateInputType
  }

  export type GetSubCategoriesAggregateType<T extends SubCategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateSubCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubCategories[P]>
      : GetScalarType<T[P], AggregateSubCategories[P]>
  }




  export type subCategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subCategoriesWhereInput
    orderBy?: subCategoriesOrderByWithAggregationInput | subCategoriesOrderByWithAggregationInput[]
    by: SubCategoriesScalarFieldEnum[] | SubCategoriesScalarFieldEnum
    having?: subCategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubCategoriesCountAggregateInputType | true
    _avg?: SubCategoriesAvgAggregateInputType
    _sum?: SubCategoriesSumAggregateInputType
    _min?: SubCategoriesMinAggregateInputType
    _max?: SubCategoriesMaxAggregateInputType
  }

  export type SubCategoriesGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    posterImageUrl: JsonValue | null
    last_editedBy: string | null
    short_description: string | null
    custom_url: string
    categoryId: number | null
    breadCrum: string | null
    Banners: JsonValue | null
    BannerText: string | null
    BannerHeading: string | null
    leftHeading: string | null
    categoryText: JsonValue[]
    categoryHeroImages: JsonValue[]
    categoryHeroToptext: string | null
    categoryHeroHeading: string | null
    categoryHeroText: JsonValue[]
    categoryFaqs: JsonValue[]
    collectionHeading: string | null
    collectionMainHeading: string | null
    QualityHeadings: JsonValue[]
    QualityText: JsonValue[]
    QualityImages: JsonValue[]
    CustomHeading: JsonValue[]
    CustomText: JsonValue[]
    Product_Section_heading: string | null
    bottomText: string | null
    bodyHeading: string | null
    bodyMainHeading: string | null
    bodyText: string | null
    explore_Heading: string | null
    explore_main_heading: string | null
    explore_description: string | null
    professionalServiceImage: JsonValue | null
    Canonical_Tag: string | null
    Meta_Description: string | null
    Meta_Title: string | null
    seoSchema: string | null
    _count: SubCategoriesCountAggregateOutputType | null
    _avg: SubCategoriesAvgAggregateOutputType | null
    _sum: SubCategoriesSumAggregateOutputType | null
    _min: SubCategoriesMinAggregateOutputType | null
    _max: SubCategoriesMaxAggregateOutputType | null
  }

  type GetSubCategoriesGroupByPayload<T extends subCategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubCategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubCategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubCategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], SubCategoriesGroupByOutputType[P]>
        }
      >
    >


  export type subCategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posterImageUrl?: boolean
    last_editedBy?: boolean
    short_description?: boolean
    custom_url?: boolean
    categoryId?: boolean
    breadCrum?: boolean
    Banners?: boolean
    BannerText?: boolean
    BannerHeading?: boolean
    leftHeading?: boolean
    categoryText?: boolean
    categoryHeroImages?: boolean
    categoryHeroToptext?: boolean
    categoryHeroHeading?: boolean
    categoryHeroText?: boolean
    categoryFaqs?: boolean
    collectionHeading?: boolean
    collectionMainHeading?: boolean
    QualityHeadings?: boolean
    QualityText?: boolean
    QualityImages?: boolean
    CustomHeading?: boolean
    CustomText?: boolean
    Product_Section_heading?: boolean
    bottomText?: boolean
    bodyHeading?: boolean
    bodyMainHeading?: boolean
    bodyText?: boolean
    explore_Heading?: boolean
    explore_main_heading?: boolean
    explore_description?: boolean
    professionalServiceImage?: boolean
    Canonical_Tag?: boolean
    Meta_Description?: boolean
    Meta_Title?: boolean
    seoSchema?: boolean
    category?: boolean | subCategories$categoryArgs<ExtArgs>
    products?: boolean | subCategories$productsArgs<ExtArgs>
    _count?: boolean | SubCategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategories"]>

  export type subCategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posterImageUrl?: boolean
    last_editedBy?: boolean
    short_description?: boolean
    custom_url?: boolean
    categoryId?: boolean
    breadCrum?: boolean
    Banners?: boolean
    BannerText?: boolean
    BannerHeading?: boolean
    leftHeading?: boolean
    categoryText?: boolean
    categoryHeroImages?: boolean
    categoryHeroToptext?: boolean
    categoryHeroHeading?: boolean
    categoryHeroText?: boolean
    categoryFaqs?: boolean
    collectionHeading?: boolean
    collectionMainHeading?: boolean
    QualityHeadings?: boolean
    QualityText?: boolean
    QualityImages?: boolean
    CustomHeading?: boolean
    CustomText?: boolean
    Product_Section_heading?: boolean
    bottomText?: boolean
    bodyHeading?: boolean
    bodyMainHeading?: boolean
    bodyText?: boolean
    explore_Heading?: boolean
    explore_main_heading?: boolean
    explore_description?: boolean
    professionalServiceImage?: boolean
    Canonical_Tag?: boolean
    Meta_Description?: boolean
    Meta_Title?: boolean
    seoSchema?: boolean
    category?: boolean | subCategories$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["subCategories"]>

  export type subCategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posterImageUrl?: boolean
    last_editedBy?: boolean
    short_description?: boolean
    custom_url?: boolean
    categoryId?: boolean
    breadCrum?: boolean
    Banners?: boolean
    BannerText?: boolean
    BannerHeading?: boolean
    leftHeading?: boolean
    categoryText?: boolean
    categoryHeroImages?: boolean
    categoryHeroToptext?: boolean
    categoryHeroHeading?: boolean
    categoryHeroText?: boolean
    categoryFaqs?: boolean
    collectionHeading?: boolean
    collectionMainHeading?: boolean
    QualityHeadings?: boolean
    QualityText?: boolean
    QualityImages?: boolean
    CustomHeading?: boolean
    CustomText?: boolean
    Product_Section_heading?: boolean
    bottomText?: boolean
    bodyHeading?: boolean
    bodyMainHeading?: boolean
    bodyText?: boolean
    explore_Heading?: boolean
    explore_main_heading?: boolean
    explore_description?: boolean
    professionalServiceImage?: boolean
    Canonical_Tag?: boolean
    Meta_Description?: boolean
    Meta_Title?: boolean
    seoSchema?: boolean
    category?: boolean | subCategories$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["subCategories"]>

  export type subCategoriesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posterImageUrl?: boolean
    last_editedBy?: boolean
    short_description?: boolean
    custom_url?: boolean
    categoryId?: boolean
    breadCrum?: boolean
    Banners?: boolean
    BannerText?: boolean
    BannerHeading?: boolean
    leftHeading?: boolean
    categoryText?: boolean
    categoryHeroImages?: boolean
    categoryHeroToptext?: boolean
    categoryHeroHeading?: boolean
    categoryHeroText?: boolean
    categoryFaqs?: boolean
    collectionHeading?: boolean
    collectionMainHeading?: boolean
    QualityHeadings?: boolean
    QualityText?: boolean
    QualityImages?: boolean
    CustomHeading?: boolean
    CustomText?: boolean
    Product_Section_heading?: boolean
    bottomText?: boolean
    bodyHeading?: boolean
    bodyMainHeading?: boolean
    bodyText?: boolean
    explore_Heading?: boolean
    explore_main_heading?: boolean
    explore_description?: boolean
    professionalServiceImage?: boolean
    Canonical_Tag?: boolean
    Meta_Description?: boolean
    Meta_Title?: boolean
    seoSchema?: boolean
  }

  export type subCategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "posterImageUrl" | "last_editedBy" | "short_description" | "custom_url" | "categoryId" | "breadCrum" | "Banners" | "BannerText" | "BannerHeading" | "leftHeading" | "categoryText" | "categoryHeroImages" | "categoryHeroToptext" | "categoryHeroHeading" | "categoryHeroText" | "categoryFaqs" | "collectionHeading" | "collectionMainHeading" | "QualityHeadings" | "QualityText" | "QualityImages" | "CustomHeading" | "CustomText" | "Product_Section_heading" | "bottomText" | "bodyHeading" | "bodyMainHeading" | "bodyText" | "explore_Heading" | "explore_main_heading" | "explore_description" | "professionalServiceImage" | "Canonical_Tag" | "Meta_Description" | "Meta_Title" | "seoSchema", ExtArgs["result"]["subCategories"]>
  export type subCategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | subCategories$categoryArgs<ExtArgs>
    products?: boolean | subCategories$productsArgs<ExtArgs>
    _count?: boolean | SubCategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type subCategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | subCategories$categoryArgs<ExtArgs>
  }
  export type subCategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | subCategories$categoryArgs<ExtArgs>
  }

  export type $subCategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subCategories"
    objects: {
      category: Prisma.$categoriesPayload<ExtArgs> | null
      products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date | null
      updatedAt: Date | null
      posterImageUrl: Prisma.JsonValue | null
      last_editedBy: string | null
      short_description: string | null
      custom_url: string
      categoryId: number | null
      breadCrum: string | null
      Banners: Prisma.JsonValue | null
      BannerText: string | null
      BannerHeading: string | null
      leftHeading: string | null
      categoryText: Prisma.JsonValue[]
      categoryHeroImages: Prisma.JsonValue[]
      categoryHeroToptext: string | null
      categoryHeroHeading: string | null
      categoryHeroText: Prisma.JsonValue[]
      categoryFaqs: Prisma.JsonValue[]
      collectionHeading: string | null
      collectionMainHeading: string | null
      QualityHeadings: Prisma.JsonValue[]
      QualityText: Prisma.JsonValue[]
      QualityImages: Prisma.JsonValue[]
      CustomHeading: Prisma.JsonValue[]
      CustomText: Prisma.JsonValue[]
      Product_Section_heading: string | null
      /**
       * /✅
       */
      bottomText: string | null
      /**
       * /✅
       */
      bodyHeading: string | null
      bodyMainHeading: string | null
      /**
       * /✅
       */
      bodyText: string | null
      explore_Heading: string | null
      explore_main_heading: string | null
      explore_description: string | null
      professionalServiceImage: Prisma.JsonValue | null
      Canonical_Tag: string | null
      Meta_Description: string | null
      Meta_Title: string | null
      seoSchema: string | null
    }, ExtArgs["result"]["subCategories"]>
    composites: {}
  }

  type subCategoriesGetPayload<S extends boolean | null | undefined | subCategoriesDefaultArgs> = $Result.GetResult<Prisma.$subCategoriesPayload, S>

  type subCategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subCategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubCategoriesCountAggregateInputType | true
    }

  export interface subCategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subCategories'], meta: { name: 'subCategories' } }
    /**
     * Find zero or one SubCategories that matches the filter.
     * @param {subCategoriesFindUniqueArgs} args - Arguments to find a SubCategories
     * @example
     * // Get one SubCategories
     * const subCategories = await prisma.subCategories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subCategoriesFindUniqueArgs>(args: SelectSubset<T, subCategoriesFindUniqueArgs<ExtArgs>>): Prisma__subCategoriesClient<$Result.GetResult<Prisma.$subCategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubCategories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subCategoriesFindUniqueOrThrowArgs} args - Arguments to find a SubCategories
     * @example
     * // Get one SubCategories
     * const subCategories = await prisma.subCategories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subCategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, subCategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subCategoriesClient<$Result.GetResult<Prisma.$subCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subCategoriesFindFirstArgs} args - Arguments to find a SubCategories
     * @example
     * // Get one SubCategories
     * const subCategories = await prisma.subCategories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subCategoriesFindFirstArgs>(args?: SelectSubset<T, subCategoriesFindFirstArgs<ExtArgs>>): Prisma__subCategoriesClient<$Result.GetResult<Prisma.$subCategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCategories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subCategoriesFindFirstOrThrowArgs} args - Arguments to find a SubCategories
     * @example
     * // Get one SubCategories
     * const subCategories = await prisma.subCategories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subCategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, subCategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__subCategoriesClient<$Result.GetResult<Prisma.$subCategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subCategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubCategories
     * const subCategories = await prisma.subCategories.findMany()
     * 
     * // Get first 10 SubCategories
     * const subCategories = await prisma.subCategories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subCategoriesWithIdOnly = await prisma.subCategories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends subCategoriesFindManyArgs>(args?: SelectSubset<T, subCategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubCategories.
     * @param {subCategoriesCreateArgs} args - Arguments to create a SubCategories.
     * @example
     * // Create one SubCategories
     * const SubCategories = await prisma.subCategories.create({
     *   data: {
     *     // ... data to create a SubCategories
     *   }
     * })
     * 
     */
    create<T extends subCategoriesCreateArgs>(args: SelectSubset<T, subCategoriesCreateArgs<ExtArgs>>): Prisma__subCategoriesClient<$Result.GetResult<Prisma.$subCategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubCategories.
     * @param {subCategoriesCreateManyArgs} args - Arguments to create many SubCategories.
     * @example
     * // Create many SubCategories
     * const subCategories = await prisma.subCategories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subCategoriesCreateManyArgs>(args?: SelectSubset<T, subCategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubCategories and returns the data saved in the database.
     * @param {subCategoriesCreateManyAndReturnArgs} args - Arguments to create many SubCategories.
     * @example
     * // Create many SubCategories
     * const subCategories = await prisma.subCategories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubCategories and only return the `id`
     * const subCategoriesWithIdOnly = await prisma.subCategories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends subCategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, subCategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subCategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubCategories.
     * @param {subCategoriesDeleteArgs} args - Arguments to delete one SubCategories.
     * @example
     * // Delete one SubCategories
     * const SubCategories = await prisma.subCategories.delete({
     *   where: {
     *     // ... filter to delete one SubCategories
     *   }
     * })
     * 
     */
    delete<T extends subCategoriesDeleteArgs>(args: SelectSubset<T, subCategoriesDeleteArgs<ExtArgs>>): Prisma__subCategoriesClient<$Result.GetResult<Prisma.$subCategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubCategories.
     * @param {subCategoriesUpdateArgs} args - Arguments to update one SubCategories.
     * @example
     * // Update one SubCategories
     * const subCategories = await prisma.subCategories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subCategoriesUpdateArgs>(args: SelectSubset<T, subCategoriesUpdateArgs<ExtArgs>>): Prisma__subCategoriesClient<$Result.GetResult<Prisma.$subCategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubCategories.
     * @param {subCategoriesDeleteManyArgs} args - Arguments to filter SubCategories to delete.
     * @example
     * // Delete a few SubCategories
     * const { count } = await prisma.subCategories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subCategoriesDeleteManyArgs>(args?: SelectSubset<T, subCategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subCategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubCategories
     * const subCategories = await prisma.subCategories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subCategoriesUpdateManyArgs>(args: SelectSubset<T, subCategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategories and returns the data updated in the database.
     * @param {subCategoriesUpdateManyAndReturnArgs} args - Arguments to update many SubCategories.
     * @example
     * // Update many SubCategories
     * const subCategories = await prisma.subCategories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubCategories and only return the `id`
     * const subCategoriesWithIdOnly = await prisma.subCategories.updateManyAndReturn({
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
    updateManyAndReturn<T extends subCategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, subCategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subCategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubCategories.
     * @param {subCategoriesUpsertArgs} args - Arguments to update or create a SubCategories.
     * @example
     * // Update or create a SubCategories
     * const subCategories = await prisma.subCategories.upsert({
     *   create: {
     *     // ... data to create a SubCategories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubCategories we want to update
     *   }
     * })
     */
    upsert<T extends subCategoriesUpsertArgs>(args: SelectSubset<T, subCategoriesUpsertArgs<ExtArgs>>): Prisma__subCategoriesClient<$Result.GetResult<Prisma.$subCategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subCategoriesCountArgs} args - Arguments to filter SubCategories to count.
     * @example
     * // Count the number of SubCategories
     * const count = await prisma.subCategories.count({
     *   where: {
     *     // ... the filter for the SubCategories we want to count
     *   }
     * })
    **/
    count<T extends subCategoriesCountArgs>(
      args?: Subset<T, subCategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubCategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubCategoriesAggregateArgs>(args: Subset<T, SubCategoriesAggregateArgs>): Prisma.PrismaPromise<GetSubCategoriesAggregateType<T>>

    /**
     * Group by SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subCategoriesGroupByArgs} args - Group by arguments.
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
      T extends subCategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subCategoriesGroupByArgs['orderBy'] }
        : { orderBy?: subCategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, subCategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subCategories model
   */
  readonly fields: subCategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subCategories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subCategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends subCategories$categoryArgs<ExtArgs> = {}>(args?: Subset<T, subCategories$categoryArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    products<T extends subCategories$productsArgs<ExtArgs> = {}>(args?: Subset<T, subCategories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the subCategories model
   */
  interface subCategoriesFieldRefs {
    readonly id: FieldRef<"subCategories", 'Int'>
    readonly name: FieldRef<"subCategories", 'String'>
    readonly description: FieldRef<"subCategories", 'String'>
    readonly createdAt: FieldRef<"subCategories", 'DateTime'>
    readonly updatedAt: FieldRef<"subCategories", 'DateTime'>
    readonly posterImageUrl: FieldRef<"subCategories", 'Json'>
    readonly last_editedBy: FieldRef<"subCategories", 'String'>
    readonly short_description: FieldRef<"subCategories", 'String'>
    readonly custom_url: FieldRef<"subCategories", 'String'>
    readonly categoryId: FieldRef<"subCategories", 'Int'>
    readonly breadCrum: FieldRef<"subCategories", 'String'>
    readonly Banners: FieldRef<"subCategories", 'Json'>
    readonly BannerText: FieldRef<"subCategories", 'String'>
    readonly BannerHeading: FieldRef<"subCategories", 'String'>
    readonly leftHeading: FieldRef<"subCategories", 'String'>
    readonly categoryText: FieldRef<"subCategories", 'Json[]'>
    readonly categoryHeroImages: FieldRef<"subCategories", 'Json[]'>
    readonly categoryHeroToptext: FieldRef<"subCategories", 'String'>
    readonly categoryHeroHeading: FieldRef<"subCategories", 'String'>
    readonly categoryHeroText: FieldRef<"subCategories", 'Json[]'>
    readonly categoryFaqs: FieldRef<"subCategories", 'Json[]'>
    readonly collectionHeading: FieldRef<"subCategories", 'String'>
    readonly collectionMainHeading: FieldRef<"subCategories", 'String'>
    readonly QualityHeadings: FieldRef<"subCategories", 'Json[]'>
    readonly QualityText: FieldRef<"subCategories", 'Json[]'>
    readonly QualityImages: FieldRef<"subCategories", 'Json[]'>
    readonly CustomHeading: FieldRef<"subCategories", 'Json[]'>
    readonly CustomText: FieldRef<"subCategories", 'Json[]'>
    readonly Product_Section_heading: FieldRef<"subCategories", 'String'>
    readonly bottomText: FieldRef<"subCategories", 'String'>
    readonly bodyHeading: FieldRef<"subCategories", 'String'>
    readonly bodyMainHeading: FieldRef<"subCategories", 'String'>
    readonly bodyText: FieldRef<"subCategories", 'String'>
    readonly explore_Heading: FieldRef<"subCategories", 'String'>
    readonly explore_main_heading: FieldRef<"subCategories", 'String'>
    readonly explore_description: FieldRef<"subCategories", 'String'>
    readonly professionalServiceImage: FieldRef<"subCategories", 'Json'>
    readonly Canonical_Tag: FieldRef<"subCategories", 'String'>
    readonly Meta_Description: FieldRef<"subCategories", 'String'>
    readonly Meta_Title: FieldRef<"subCategories", 'String'>
    readonly seoSchema: FieldRef<"subCategories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * subCategories findUnique
   */
  export type subCategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategories
     */
    select?: subCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subCategories
     */
    omit?: subCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which subCategories to fetch.
     */
    where: subCategoriesWhereUniqueInput
  }

  /**
   * subCategories findUniqueOrThrow
   */
  export type subCategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategories
     */
    select?: subCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subCategories
     */
    omit?: subCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which subCategories to fetch.
     */
    where: subCategoriesWhereUniqueInput
  }

  /**
   * subCategories findFirst
   */
  export type subCategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategories
     */
    select?: subCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subCategories
     */
    omit?: subCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which subCategories to fetch.
     */
    where?: subCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subCategories to fetch.
     */
    orderBy?: subCategoriesOrderByWithRelationInput | subCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subCategories.
     */
    cursor?: subCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subCategories.
     */
    distinct?: SubCategoriesScalarFieldEnum | SubCategoriesScalarFieldEnum[]
  }

  /**
   * subCategories findFirstOrThrow
   */
  export type subCategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategories
     */
    select?: subCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subCategories
     */
    omit?: subCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which subCategories to fetch.
     */
    where?: subCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subCategories to fetch.
     */
    orderBy?: subCategoriesOrderByWithRelationInput | subCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subCategories.
     */
    cursor?: subCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subCategories.
     */
    distinct?: SubCategoriesScalarFieldEnum | SubCategoriesScalarFieldEnum[]
  }

  /**
   * subCategories findMany
   */
  export type subCategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategories
     */
    select?: subCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subCategories
     */
    omit?: subCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which subCategories to fetch.
     */
    where?: subCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subCategories to fetch.
     */
    orderBy?: subCategoriesOrderByWithRelationInput | subCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subCategories.
     */
    cursor?: subCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subCategories.
     */
    skip?: number
    distinct?: SubCategoriesScalarFieldEnum | SubCategoriesScalarFieldEnum[]
  }

  /**
   * subCategories create
   */
  export type subCategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategories
     */
    select?: subCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subCategories
     */
    omit?: subCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a subCategories.
     */
    data: XOR<subCategoriesCreateInput, subCategoriesUncheckedCreateInput>
  }

  /**
   * subCategories createMany
   */
  export type subCategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subCategories.
     */
    data: subCategoriesCreateManyInput | subCategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subCategories createManyAndReturn
   */
  export type subCategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategories
     */
    select?: subCategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subCategories
     */
    omit?: subCategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many subCategories.
     */
    data: subCategoriesCreateManyInput | subCategoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subCategoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * subCategories update
   */
  export type subCategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategories
     */
    select?: subCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subCategories
     */
    omit?: subCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a subCategories.
     */
    data: XOR<subCategoriesUpdateInput, subCategoriesUncheckedUpdateInput>
    /**
     * Choose, which subCategories to update.
     */
    where: subCategoriesWhereUniqueInput
  }

  /**
   * subCategories updateMany
   */
  export type subCategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subCategories.
     */
    data: XOR<subCategoriesUpdateManyMutationInput, subCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which subCategories to update
     */
    where?: subCategoriesWhereInput
    /**
     * Limit how many subCategories to update.
     */
    limit?: number
  }

  /**
   * subCategories updateManyAndReturn
   */
  export type subCategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategories
     */
    select?: subCategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subCategories
     */
    omit?: subCategoriesOmit<ExtArgs> | null
    /**
     * The data used to update subCategories.
     */
    data: XOR<subCategoriesUpdateManyMutationInput, subCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which subCategories to update
     */
    where?: subCategoriesWhereInput
    /**
     * Limit how many subCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subCategoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * subCategories upsert
   */
  export type subCategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategories
     */
    select?: subCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subCategories
     */
    omit?: subCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subCategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the subCategories to update in case it exists.
     */
    where: subCategoriesWhereUniqueInput
    /**
     * In case the subCategories found by the `where` argument doesn't exist, create a new subCategories with this data.
     */
    create: XOR<subCategoriesCreateInput, subCategoriesUncheckedCreateInput>
    /**
     * In case the subCategories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subCategoriesUpdateInput, subCategoriesUncheckedUpdateInput>
  }

  /**
   * subCategories delete
   */
  export type subCategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategories
     */
    select?: subCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subCategories
     */
    omit?: subCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subCategoriesInclude<ExtArgs> | null
    /**
     * Filter which subCategories to delete.
     */
    where: subCategoriesWhereUniqueInput
  }

  /**
   * subCategories deleteMany
   */
  export type subCategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subCategories to delete
     */
    where?: subCategoriesWhereInput
    /**
     * Limit how many subCategories to delete.
     */
    limit?: number
  }

  /**
   * subCategories.category
   */
  export type subCategories$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
  }

  /**
   * subCategories.products
   */
  export type subCategories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * subCategories without action
   */
  export type subCategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategories
     */
    select?: subCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subCategories
     */
    omit?: subCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subCategoriesInclude<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
    discountPrice: number | null
    categoryId: number | null
    subCategoryId: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
    discountPrice: number | null
    categoryId: number | null
    subCategoryId: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    description: string | null
    stock: number | null
    discountPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
    Canonical_Tag: string | null
    Meta_Description: string | null
    Meta_Title: string | null
    last_editedBy: string | null
    custom_url: string | null
    breadCrum: string | null
    BannerText: string | null
    BannerHeading: string | null
    categoryHeroToptext: string | null
    categoryHeroHeading: string | null
    right_side_Heading: string | null
    Product_Section_heading: string | null
    bottomText: string | null
    explore_Heading: string | null
    explore_main_heading: string | null
    explore_description: string | null
    categoryId: number | null
    subCategoryId: number | null
    seoSchema: string | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    description: string | null
    stock: number | null
    discountPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
    Canonical_Tag: string | null
    Meta_Description: string | null
    Meta_Title: string | null
    last_editedBy: string | null
    custom_url: string | null
    breadCrum: string | null
    BannerText: string | null
    BannerHeading: string | null
    categoryHeroToptext: string | null
    categoryHeroHeading: string | null
    right_side_Heading: string | null
    Product_Section_heading: string | null
    bottomText: string | null
    explore_Heading: string | null
    explore_main_heading: string | null
    explore_description: string | null
    categoryId: number | null
    subCategoryId: number | null
    seoSchema: string | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    price: number
    description: number
    stock: number
    discountPrice: number
    posterImageUrl: number
    hoverImageUrl: number
    productImages: number
    createdAt: number
    updatedAt: number
    Canonical_Tag: number
    Meta_Description: number
    Meta_Title: number
    last_editedBy: number
    custom_url: number
    breadCrum: number
    Banners: number
    BannerText: number
    BannerHeading: number
    categoryHeroImages: number
    categoryHeroToptext: number
    categoryHeroHeading: number
    categoryHeroText: number
    categoryFaqs: number
    right_side_Heading: number
    left_side_Text: number
    left_side_image: number
    Product_Section_heading: number
    bottomText: number
    explore_Heading: number
    explore_main_heading: number
    explore_description: number
    professionalServiceImage: number
    categoryId: number
    subCategoryId: number
    seoSchema: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    price?: true
    stock?: true
    discountPrice?: true
    categoryId?: true
    subCategoryId?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    price?: true
    stock?: true
    discountPrice?: true
    categoryId?: true
    subCategoryId?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    stock?: true
    discountPrice?: true
    createdAt?: true
    updatedAt?: true
    Canonical_Tag?: true
    Meta_Description?: true
    Meta_Title?: true
    last_editedBy?: true
    custom_url?: true
    breadCrum?: true
    BannerText?: true
    BannerHeading?: true
    categoryHeroToptext?: true
    categoryHeroHeading?: true
    right_side_Heading?: true
    Product_Section_heading?: true
    bottomText?: true
    explore_Heading?: true
    explore_main_heading?: true
    explore_description?: true
    categoryId?: true
    subCategoryId?: true
    seoSchema?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    stock?: true
    discountPrice?: true
    createdAt?: true
    updatedAt?: true
    Canonical_Tag?: true
    Meta_Description?: true
    Meta_Title?: true
    last_editedBy?: true
    custom_url?: true
    breadCrum?: true
    BannerText?: true
    BannerHeading?: true
    categoryHeroToptext?: true
    categoryHeroHeading?: true
    right_side_Heading?: true
    Product_Section_heading?: true
    bottomText?: true
    explore_Heading?: true
    explore_main_heading?: true
    explore_description?: true
    categoryId?: true
    subCategoryId?: true
    seoSchema?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    stock?: true
    discountPrice?: true
    posterImageUrl?: true
    hoverImageUrl?: true
    productImages?: true
    createdAt?: true
    updatedAt?: true
    Canonical_Tag?: true
    Meta_Description?: true
    Meta_Title?: true
    last_editedBy?: true
    custom_url?: true
    breadCrum?: true
    Banners?: true
    BannerText?: true
    BannerHeading?: true
    categoryHeroImages?: true
    categoryHeroToptext?: true
    categoryHeroHeading?: true
    categoryHeroText?: true
    categoryFaqs?: true
    right_side_Heading?: true
    left_side_Text?: true
    left_side_image?: true
    Product_Section_heading?: true
    bottomText?: true
    explore_Heading?: true
    explore_main_heading?: true
    explore_description?: true
    professionalServiceImage?: true
    categoryId?: true
    subCategoryId?: true
    seoSchema?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    name: string
    price: number
    description: string
    stock: number
    discountPrice: number | null
    posterImageUrl: JsonValue
    hoverImageUrl: JsonValue | null
    productImages: JsonValue[]
    createdAt: Date | null
    updatedAt: Date | null
    Canonical_Tag: string | null
    Meta_Description: string | null
    Meta_Title: string | null
    last_editedBy: string | null
    custom_url: string
    breadCrum: string | null
    Banners: JsonValue | null
    BannerText: string | null
    BannerHeading: string | null
    categoryHeroImages: JsonValue[]
    categoryHeroToptext: string | null
    categoryHeroHeading: string | null
    categoryHeroText: JsonValue[]
    categoryFaqs: JsonValue[]
    right_side_Heading: string | null
    left_side_Text: JsonValue[]
    left_side_image: JsonValue | null
    Product_Section_heading: string | null
    bottomText: string | null
    explore_Heading: string | null
    explore_main_heading: string | null
    explore_description: string | null
    professionalServiceImage: JsonValue | null
    categoryId: number | null
    subCategoryId: number | null
    seoSchema: string | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    stock?: boolean
    discountPrice?: boolean
    posterImageUrl?: boolean
    hoverImageUrl?: boolean
    productImages?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Canonical_Tag?: boolean
    Meta_Description?: boolean
    Meta_Title?: boolean
    last_editedBy?: boolean
    custom_url?: boolean
    breadCrum?: boolean
    Banners?: boolean
    BannerText?: boolean
    BannerHeading?: boolean
    categoryHeroImages?: boolean
    categoryHeroToptext?: boolean
    categoryHeroHeading?: boolean
    categoryHeroText?: boolean
    categoryFaqs?: boolean
    right_side_Heading?: boolean
    left_side_Text?: boolean
    left_side_image?: boolean
    Product_Section_heading?: boolean
    bottomText?: boolean
    explore_Heading?: boolean
    explore_main_heading?: boolean
    explore_description?: boolean
    professionalServiceImage?: boolean
    categoryId?: boolean
    subCategoryId?: boolean
    seoSchema?: boolean
    category?: boolean | Products$categoryArgs<ExtArgs>
    subcategory?: boolean | Products$subcategoryArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    stock?: boolean
    discountPrice?: boolean
    posterImageUrl?: boolean
    hoverImageUrl?: boolean
    productImages?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Canonical_Tag?: boolean
    Meta_Description?: boolean
    Meta_Title?: boolean
    last_editedBy?: boolean
    custom_url?: boolean
    breadCrum?: boolean
    Banners?: boolean
    BannerText?: boolean
    BannerHeading?: boolean
    categoryHeroImages?: boolean
    categoryHeroToptext?: boolean
    categoryHeroHeading?: boolean
    categoryHeroText?: boolean
    categoryFaqs?: boolean
    right_side_Heading?: boolean
    left_side_Text?: boolean
    left_side_image?: boolean
    Product_Section_heading?: boolean
    bottomText?: boolean
    explore_Heading?: boolean
    explore_main_heading?: boolean
    explore_description?: boolean
    professionalServiceImage?: boolean
    categoryId?: boolean
    subCategoryId?: boolean
    seoSchema?: boolean
    category?: boolean | Products$categoryArgs<ExtArgs>
    subcategory?: boolean | Products$subcategoryArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    stock?: boolean
    discountPrice?: boolean
    posterImageUrl?: boolean
    hoverImageUrl?: boolean
    productImages?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Canonical_Tag?: boolean
    Meta_Description?: boolean
    Meta_Title?: boolean
    last_editedBy?: boolean
    custom_url?: boolean
    breadCrum?: boolean
    Banners?: boolean
    BannerText?: boolean
    BannerHeading?: boolean
    categoryHeroImages?: boolean
    categoryHeroToptext?: boolean
    categoryHeroHeading?: boolean
    categoryHeroText?: boolean
    categoryFaqs?: boolean
    right_side_Heading?: boolean
    left_side_Text?: boolean
    left_side_image?: boolean
    Product_Section_heading?: boolean
    bottomText?: boolean
    explore_Heading?: boolean
    explore_main_heading?: boolean
    explore_description?: boolean
    professionalServiceImage?: boolean
    categoryId?: boolean
    subCategoryId?: boolean
    seoSchema?: boolean
    category?: boolean | Products$categoryArgs<ExtArgs>
    subcategory?: boolean | Products$subcategoryArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    stock?: boolean
    discountPrice?: boolean
    posterImageUrl?: boolean
    hoverImageUrl?: boolean
    productImages?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Canonical_Tag?: boolean
    Meta_Description?: boolean
    Meta_Title?: boolean
    last_editedBy?: boolean
    custom_url?: boolean
    breadCrum?: boolean
    Banners?: boolean
    BannerText?: boolean
    BannerHeading?: boolean
    categoryHeroImages?: boolean
    categoryHeroToptext?: boolean
    categoryHeroHeading?: boolean
    categoryHeroText?: boolean
    categoryFaqs?: boolean
    right_side_Heading?: boolean
    left_side_Text?: boolean
    left_side_image?: boolean
    Product_Section_heading?: boolean
    bottomText?: boolean
    explore_Heading?: boolean
    explore_main_heading?: boolean
    explore_description?: boolean
    professionalServiceImage?: boolean
    categoryId?: boolean
    subCategoryId?: boolean
    seoSchema?: boolean
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "description" | "stock" | "discountPrice" | "posterImageUrl" | "hoverImageUrl" | "productImages" | "createdAt" | "updatedAt" | "Canonical_Tag" | "Meta_Description" | "Meta_Title" | "last_editedBy" | "custom_url" | "breadCrum" | "Banners" | "BannerText" | "BannerHeading" | "categoryHeroImages" | "categoryHeroToptext" | "categoryHeroHeading" | "categoryHeroText" | "categoryFaqs" | "right_side_Heading" | "left_side_Text" | "left_side_image" | "Product_Section_heading" | "bottomText" | "explore_Heading" | "explore_main_heading" | "explore_description" | "professionalServiceImage" | "categoryId" | "subCategoryId" | "seoSchema", ExtArgs["result"]["products"]>
  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Products$categoryArgs<ExtArgs>
    subcategory?: boolean | Products$subcategoryArgs<ExtArgs>
  }
  export type ProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Products$categoryArgs<ExtArgs>
    subcategory?: boolean | Products$subcategoryArgs<ExtArgs>
  }
  export type ProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Products$categoryArgs<ExtArgs>
    subcategory?: boolean | Products$subcategoryArgs<ExtArgs>
  }

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      category: Prisma.$categoriesPayload<ExtArgs> | null
      subcategory: Prisma.$subCategoriesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      /**
       * /✅
       */
      name: string
      price: number
      description: string
      stock: number
      discountPrice: number | null
      posterImageUrl: Prisma.JsonValue
      hoverImageUrl: Prisma.JsonValue | null
      productImages: Prisma.JsonValue[]
      createdAt: Date | null
      updatedAt: Date | null
      Canonical_Tag: string | null
      Meta_Description: string | null
      Meta_Title: string | null
      last_editedBy: string | null
      custom_url: string
      breadCrum: string | null
      Banners: Prisma.JsonValue | null
      BannerText: string | null
      BannerHeading: string | null
      categoryHeroImages: Prisma.JsonValue[]
      categoryHeroToptext: string | null
      categoryHeroHeading: string | null
      categoryHeroText: Prisma.JsonValue[]
      categoryFaqs: Prisma.JsonValue[]
      right_side_Heading: string | null
      left_side_Text: Prisma.JsonValue[]
      left_side_image: Prisma.JsonValue | null
      Product_Section_heading: string | null
      bottomText: string | null
      explore_Heading: string | null
      explore_main_heading: string | null
      explore_description: string | null
      professionalServiceImage: Prisma.JsonValue | null
      categoryId: number | null
      subCategoryId: number | null
      seoSchema: string | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
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
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Products$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Products$categoryArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subcategory<T extends Products$subcategoryArgs<ExtArgs> = {}>(args?: Subset<T, Products$subcategoryArgs<ExtArgs>>): Prisma__subCategoriesClient<$Result.GetResult<Prisma.$subCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly id: FieldRef<"Products", 'Int'>
    readonly name: FieldRef<"Products", 'String'>
    readonly price: FieldRef<"Products", 'Int'>
    readonly description: FieldRef<"Products", 'String'>
    readonly stock: FieldRef<"Products", 'Int'>
    readonly discountPrice: FieldRef<"Products", 'Int'>
    readonly posterImageUrl: FieldRef<"Products", 'Json'>
    readonly hoverImageUrl: FieldRef<"Products", 'Json'>
    readonly productImages: FieldRef<"Products", 'Json[]'>
    readonly createdAt: FieldRef<"Products", 'DateTime'>
    readonly updatedAt: FieldRef<"Products", 'DateTime'>
    readonly Canonical_Tag: FieldRef<"Products", 'String'>
    readonly Meta_Description: FieldRef<"Products", 'String'>
    readonly Meta_Title: FieldRef<"Products", 'String'>
    readonly last_editedBy: FieldRef<"Products", 'String'>
    readonly custom_url: FieldRef<"Products", 'String'>
    readonly breadCrum: FieldRef<"Products", 'String'>
    readonly Banners: FieldRef<"Products", 'Json'>
    readonly BannerText: FieldRef<"Products", 'String'>
    readonly BannerHeading: FieldRef<"Products", 'String'>
    readonly categoryHeroImages: FieldRef<"Products", 'Json[]'>
    readonly categoryHeroToptext: FieldRef<"Products", 'String'>
    readonly categoryHeroHeading: FieldRef<"Products", 'String'>
    readonly categoryHeroText: FieldRef<"Products", 'Json[]'>
    readonly categoryFaqs: FieldRef<"Products", 'Json[]'>
    readonly right_side_Heading: FieldRef<"Products", 'String'>
    readonly left_side_Text: FieldRef<"Products", 'Json[]'>
    readonly left_side_image: FieldRef<"Products", 'Json'>
    readonly Product_Section_heading: FieldRef<"Products", 'String'>
    readonly bottomText: FieldRef<"Products", 'String'>
    readonly explore_Heading: FieldRef<"Products", 'String'>
    readonly explore_main_heading: FieldRef<"Products", 'String'>
    readonly explore_description: FieldRef<"Products", 'String'>
    readonly professionalServiceImage: FieldRef<"Products", 'Json'>
    readonly categoryId: FieldRef<"Products", 'Int'>
    readonly subCategoryId: FieldRef<"Products", 'Int'>
    readonly seoSchema: FieldRef<"Products", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products createManyAndReturn
   */
  export type ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products updateManyAndReturn
   */
  export type ProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products.category
   */
  export type Products$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
  }

  /**
   * Products.subcategory
   */
  export type Products$subcategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subCategories
     */
    select?: subCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subCategories
     */
    omit?: subCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subCategoriesInclude<ExtArgs> | null
    where?: subCategoriesWhereInput
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
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
   * Model Reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    id: number | null
    starRating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    id: number | null
    starRating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: number | null
    name: string | null
    starRating: number | null
    ReviewsDescription: string | null
    reviewDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    starRating: number | null
    ReviewsDescription: string | null
    reviewDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    posterImageUrl: number
    name: number
    starRating: number
    ReviewsDescription: number
    reviewDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    id?: true
    starRating?: true
  }

  export type ReviewsSumAggregateInputType = {
    id?: true
    starRating?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    name?: true
    starRating?: true
    ReviewsDescription?: true
    reviewDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    name?: true
    starRating?: true
    ReviewsDescription?: true
    reviewDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    posterImageUrl?: true
    name?: true
    starRating?: true
    ReviewsDescription?: true
    reviewDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to aggregate.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type ReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithAggregationInput | ReviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: ReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: number
    posterImageUrl: JsonValue | null
    name: string
    starRating: number | null
    ReviewsDescription: string
    reviewDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends ReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type ReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    posterImageUrl?: boolean
    name?: boolean
    starRating?: boolean
    ReviewsDescription?: boolean
    reviewDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    posterImageUrl?: boolean
    name?: boolean
    starRating?: boolean
    ReviewsDescription?: boolean
    reviewDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    posterImageUrl?: boolean
    name?: boolean
    starRating?: boolean
    ReviewsDescription?: boolean
    reviewDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectScalar = {
    id?: boolean
    posterImageUrl?: boolean
    name?: boolean
    starRating?: boolean
    ReviewsDescription?: boolean
    reviewDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "posterImageUrl" | "name" | "starRating" | "ReviewsDescription" | "reviewDate" | "createdAt" | "updatedAt", ExtArgs["result"]["reviews"]>

  export type $ReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviews"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      posterImageUrl: Prisma.JsonValue | null
      name: string
      starRating: number | null
      ReviewsDescription: string
      reviewDate: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type ReviewsGetPayload<S extends boolean | null | undefined | ReviewsDefaultArgs> = $Result.GetResult<Prisma.$ReviewsPayload, S>

  type ReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface ReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reviews'], meta: { name: 'Reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {ReviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewsFindUniqueArgs>(args: SelectSubset<T, ReviewsFindUniqueArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewsFindFirstArgs>(args?: SelectSubset<T, ReviewsFindFirstArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewsFindManyArgs>(args?: SelectSubset<T, ReviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {ReviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends ReviewsCreateArgs>(args: SelectSubset<T, ReviewsCreateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewsCreateManyArgs>(args?: SelectSubset<T, ReviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reviews.
     * @param {ReviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends ReviewsDeleteArgs>(args: SelectSubset<T, ReviewsDeleteArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {ReviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewsUpdateArgs>(args: SelectSubset<T, ReviewsUpdateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewsDeleteManyArgs>(args?: SelectSubset<T, ReviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewsUpdateManyArgs>(args: SelectSubset<T, ReviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewsUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reviews.
     * @param {ReviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends ReviewsUpsertArgs>(args: SelectSubset<T, ReviewsUpsertArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewsCountArgs>(
      args?: Subset<T, ReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsGroupByArgs} args - Group by arguments.
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
      T extends ReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ReviewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reviews model
   */
  readonly fields: ReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Reviews model
   */
  interface ReviewsFieldRefs {
    readonly id: FieldRef<"Reviews", 'Int'>
    readonly posterImageUrl: FieldRef<"Reviews", 'Json'>
    readonly name: FieldRef<"Reviews", 'String'>
    readonly starRating: FieldRef<"Reviews", 'Int'>
    readonly ReviewsDescription: FieldRef<"Reviews", 'String'>
    readonly reviewDate: FieldRef<"Reviews", 'String'>
    readonly createdAt: FieldRef<"Reviews", 'DateTime'>
    readonly updatedAt: FieldRef<"Reviews", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reviews findUnique
   */
  export type ReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findUniqueOrThrow
   */
  export type ReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findFirst
   */
  export type ReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findFirstOrThrow
   */
  export type ReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findMany
   */
  export type ReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews create
   */
  export type ReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data needed to create a Reviews.
     */
    data: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
  }

  /**
   * Reviews createMany
   */
  export type ReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reviews createManyAndReturn
   */
  export type ReviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reviews update
   */
  export type ReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data needed to update a Reviews.
     */
    data: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
    /**
     * Choose, which Reviews to update.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews updateMany
   */
  export type ReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Reviews updateManyAndReturn
   */
  export type ReviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Reviews upsert
   */
  export type ReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The filter to search for the Reviews to update in case it exists.
     */
    where: ReviewsWhereUniqueInput
    /**
     * In case the Reviews found by the `where` argument doesn't exist, create a new Reviews with this data.
     */
    create: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
    /**
     * In case the Reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
  }

  /**
   * Reviews delete
   */
  export type ReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Filter which Reviews to delete.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews deleteMany
   */
  export type ReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Reviews without action
   */
  export type ReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
  }


  /**
   * Model SocialLinks
   */

  export type AggregateSocialLinks = {
    _count: SocialLinksCountAggregateOutputType | null
    _avg: SocialLinksAvgAggregateOutputType | null
    _sum: SocialLinksSumAggregateOutputType | null
    _min: SocialLinksMinAggregateOutputType | null
    _max: SocialLinksMaxAggregateOutputType | null
  }

  export type SocialLinksAvgAggregateOutputType = {
    id: number | null
  }

  export type SocialLinksSumAggregateOutputType = {
    id: number | null
  }

  export type SocialLinksMinAggregateOutputType = {
    id: number | null
    post_links: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialLinksMaxAggregateOutputType = {
    id: number | null
    post_links: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialLinksCountAggregateOutputType = {
    id: number
    posterImageUrl: number
    post_links: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SocialLinksAvgAggregateInputType = {
    id?: true
  }

  export type SocialLinksSumAggregateInputType = {
    id?: true
  }

  export type SocialLinksMinAggregateInputType = {
    id?: true
    post_links?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialLinksMaxAggregateInputType = {
    id?: true
    post_links?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialLinksCountAggregateInputType = {
    id?: true
    posterImageUrl?: true
    post_links?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SocialLinksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLinks to aggregate.
     */
    where?: SocialLinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinksOrderByWithRelationInput | SocialLinksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialLinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialLinks
    **/
    _count?: true | SocialLinksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialLinksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialLinksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialLinksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialLinksMaxAggregateInputType
  }

  export type GetSocialLinksAggregateType<T extends SocialLinksAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialLinks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialLinks[P]>
      : GetScalarType<T[P], AggregateSocialLinks[P]>
  }




  export type SocialLinksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialLinksWhereInput
    orderBy?: SocialLinksOrderByWithAggregationInput | SocialLinksOrderByWithAggregationInput[]
    by: SocialLinksScalarFieldEnum[] | SocialLinksScalarFieldEnum
    having?: SocialLinksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialLinksCountAggregateInputType | true
    _avg?: SocialLinksAvgAggregateInputType
    _sum?: SocialLinksSumAggregateInputType
    _min?: SocialLinksMinAggregateInputType
    _max?: SocialLinksMaxAggregateInputType
  }

  export type SocialLinksGroupByOutputType = {
    id: number
    posterImageUrl: JsonValue
    post_links: string
    createdAt: Date | null
    updatedAt: Date | null
    _count: SocialLinksCountAggregateOutputType | null
    _avg: SocialLinksAvgAggregateOutputType | null
    _sum: SocialLinksSumAggregateOutputType | null
    _min: SocialLinksMinAggregateOutputType | null
    _max: SocialLinksMaxAggregateOutputType | null
  }

  type GetSocialLinksGroupByPayload<T extends SocialLinksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialLinksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialLinksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialLinksGroupByOutputType[P]>
            : GetScalarType<T[P], SocialLinksGroupByOutputType[P]>
        }
      >
    >


  export type SocialLinksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    posterImageUrl?: boolean
    post_links?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["socialLinks"]>

  export type SocialLinksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    posterImageUrl?: boolean
    post_links?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["socialLinks"]>

  export type SocialLinksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    posterImageUrl?: boolean
    post_links?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["socialLinks"]>

  export type SocialLinksSelectScalar = {
    id?: boolean
    posterImageUrl?: boolean
    post_links?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SocialLinksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "posterImageUrl" | "post_links" | "createdAt" | "updatedAt", ExtArgs["result"]["socialLinks"]>

  export type $SocialLinksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialLinks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      posterImageUrl: Prisma.JsonValue
      post_links: string
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["socialLinks"]>
    composites: {}
  }

  type SocialLinksGetPayload<S extends boolean | null | undefined | SocialLinksDefaultArgs> = $Result.GetResult<Prisma.$SocialLinksPayload, S>

  type SocialLinksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialLinksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialLinksCountAggregateInputType | true
    }

  export interface SocialLinksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialLinks'], meta: { name: 'SocialLinks' } }
    /**
     * Find zero or one SocialLinks that matches the filter.
     * @param {SocialLinksFindUniqueArgs} args - Arguments to find a SocialLinks
     * @example
     * // Get one SocialLinks
     * const socialLinks = await prisma.socialLinks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialLinksFindUniqueArgs>(args: SelectSubset<T, SocialLinksFindUniqueArgs<ExtArgs>>): Prisma__SocialLinksClient<$Result.GetResult<Prisma.$SocialLinksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialLinks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialLinksFindUniqueOrThrowArgs} args - Arguments to find a SocialLinks
     * @example
     * // Get one SocialLinks
     * const socialLinks = await prisma.socialLinks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialLinksFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialLinksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialLinksClient<$Result.GetResult<Prisma.$SocialLinksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinksFindFirstArgs} args - Arguments to find a SocialLinks
     * @example
     * // Get one SocialLinks
     * const socialLinks = await prisma.socialLinks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialLinksFindFirstArgs>(args?: SelectSubset<T, SocialLinksFindFirstArgs<ExtArgs>>): Prisma__SocialLinksClient<$Result.GetResult<Prisma.$SocialLinksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialLinks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinksFindFirstOrThrowArgs} args - Arguments to find a SocialLinks
     * @example
     * // Get one SocialLinks
     * const socialLinks = await prisma.socialLinks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialLinksFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialLinksFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialLinksClient<$Result.GetResult<Prisma.$SocialLinksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialLinks
     * const socialLinks = await prisma.socialLinks.findMany()
     * 
     * // Get first 10 SocialLinks
     * const socialLinks = await prisma.socialLinks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialLinksWithIdOnly = await prisma.socialLinks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialLinksFindManyArgs>(args?: SelectSubset<T, SocialLinksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialLinks.
     * @param {SocialLinksCreateArgs} args - Arguments to create a SocialLinks.
     * @example
     * // Create one SocialLinks
     * const SocialLinks = await prisma.socialLinks.create({
     *   data: {
     *     // ... data to create a SocialLinks
     *   }
     * })
     * 
     */
    create<T extends SocialLinksCreateArgs>(args: SelectSubset<T, SocialLinksCreateArgs<ExtArgs>>): Prisma__SocialLinksClient<$Result.GetResult<Prisma.$SocialLinksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialLinks.
     * @param {SocialLinksCreateManyArgs} args - Arguments to create many SocialLinks.
     * @example
     * // Create many SocialLinks
     * const socialLinks = await prisma.socialLinks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialLinksCreateManyArgs>(args?: SelectSubset<T, SocialLinksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialLinks and returns the data saved in the database.
     * @param {SocialLinksCreateManyAndReturnArgs} args - Arguments to create many SocialLinks.
     * @example
     * // Create many SocialLinks
     * const socialLinks = await prisma.socialLinks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialLinks and only return the `id`
     * const socialLinksWithIdOnly = await prisma.socialLinks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialLinksCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialLinksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialLinks.
     * @param {SocialLinksDeleteArgs} args - Arguments to delete one SocialLinks.
     * @example
     * // Delete one SocialLinks
     * const SocialLinks = await prisma.socialLinks.delete({
     *   where: {
     *     // ... filter to delete one SocialLinks
     *   }
     * })
     * 
     */
    delete<T extends SocialLinksDeleteArgs>(args: SelectSubset<T, SocialLinksDeleteArgs<ExtArgs>>): Prisma__SocialLinksClient<$Result.GetResult<Prisma.$SocialLinksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialLinks.
     * @param {SocialLinksUpdateArgs} args - Arguments to update one SocialLinks.
     * @example
     * // Update one SocialLinks
     * const socialLinks = await prisma.socialLinks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialLinksUpdateArgs>(args: SelectSubset<T, SocialLinksUpdateArgs<ExtArgs>>): Prisma__SocialLinksClient<$Result.GetResult<Prisma.$SocialLinksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialLinks.
     * @param {SocialLinksDeleteManyArgs} args - Arguments to filter SocialLinks to delete.
     * @example
     * // Delete a few SocialLinks
     * const { count } = await prisma.socialLinks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialLinksDeleteManyArgs>(args?: SelectSubset<T, SocialLinksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialLinks
     * const socialLinks = await prisma.socialLinks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialLinksUpdateManyArgs>(args: SelectSubset<T, SocialLinksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialLinks and returns the data updated in the database.
     * @param {SocialLinksUpdateManyAndReturnArgs} args - Arguments to update many SocialLinks.
     * @example
     * // Update many SocialLinks
     * const socialLinks = await prisma.socialLinks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialLinks and only return the `id`
     * const socialLinksWithIdOnly = await prisma.socialLinks.updateManyAndReturn({
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
    updateManyAndReturn<T extends SocialLinksUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialLinksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialLinks.
     * @param {SocialLinksUpsertArgs} args - Arguments to update or create a SocialLinks.
     * @example
     * // Update or create a SocialLinks
     * const socialLinks = await prisma.socialLinks.upsert({
     *   create: {
     *     // ... data to create a SocialLinks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialLinks we want to update
     *   }
     * })
     */
    upsert<T extends SocialLinksUpsertArgs>(args: SelectSubset<T, SocialLinksUpsertArgs<ExtArgs>>): Prisma__SocialLinksClient<$Result.GetResult<Prisma.$SocialLinksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinksCountArgs} args - Arguments to filter SocialLinks to count.
     * @example
     * // Count the number of SocialLinks
     * const count = await prisma.socialLinks.count({
     *   where: {
     *     // ... the filter for the SocialLinks we want to count
     *   }
     * })
    **/
    count<T extends SocialLinksCountArgs>(
      args?: Subset<T, SocialLinksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialLinksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialLinksAggregateArgs>(args: Subset<T, SocialLinksAggregateArgs>): Prisma.PrismaPromise<GetSocialLinksAggregateType<T>>

    /**
     * Group by SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinksGroupByArgs} args - Group by arguments.
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
      T extends SocialLinksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialLinksGroupByArgs['orderBy'] }
        : { orderBy?: SocialLinksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialLinksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialLinksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialLinks model
   */
  readonly fields: SocialLinksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialLinks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialLinksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SocialLinks model
   */
  interface SocialLinksFieldRefs {
    readonly id: FieldRef<"SocialLinks", 'Int'>
    readonly posterImageUrl: FieldRef<"SocialLinks", 'Json'>
    readonly post_links: FieldRef<"SocialLinks", 'String'>
    readonly createdAt: FieldRef<"SocialLinks", 'DateTime'>
    readonly updatedAt: FieldRef<"SocialLinks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocialLinks findUnique
   */
  export type SocialLinksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinks
     */
    select?: SocialLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinks
     */
    omit?: SocialLinksOmit<ExtArgs> | null
    /**
     * Filter, which SocialLinks to fetch.
     */
    where: SocialLinksWhereUniqueInput
  }

  /**
   * SocialLinks findUniqueOrThrow
   */
  export type SocialLinksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinks
     */
    select?: SocialLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinks
     */
    omit?: SocialLinksOmit<ExtArgs> | null
    /**
     * Filter, which SocialLinks to fetch.
     */
    where: SocialLinksWhereUniqueInput
  }

  /**
   * SocialLinks findFirst
   */
  export type SocialLinksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinks
     */
    select?: SocialLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinks
     */
    omit?: SocialLinksOmit<ExtArgs> | null
    /**
     * Filter, which SocialLinks to fetch.
     */
    where?: SocialLinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinksOrderByWithRelationInput | SocialLinksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLinks.
     */
    cursor?: SocialLinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinks.
     */
    distinct?: SocialLinksScalarFieldEnum | SocialLinksScalarFieldEnum[]
  }

  /**
   * SocialLinks findFirstOrThrow
   */
  export type SocialLinksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinks
     */
    select?: SocialLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinks
     */
    omit?: SocialLinksOmit<ExtArgs> | null
    /**
     * Filter, which SocialLinks to fetch.
     */
    where?: SocialLinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinksOrderByWithRelationInput | SocialLinksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLinks.
     */
    cursor?: SocialLinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinks.
     */
    distinct?: SocialLinksScalarFieldEnum | SocialLinksScalarFieldEnum[]
  }

  /**
   * SocialLinks findMany
   */
  export type SocialLinksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinks
     */
    select?: SocialLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinks
     */
    omit?: SocialLinksOmit<ExtArgs> | null
    /**
     * Filter, which SocialLinks to fetch.
     */
    where?: SocialLinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinksOrderByWithRelationInput | SocialLinksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialLinks.
     */
    cursor?: SocialLinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    distinct?: SocialLinksScalarFieldEnum | SocialLinksScalarFieldEnum[]
  }

  /**
   * SocialLinks create
   */
  export type SocialLinksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinks
     */
    select?: SocialLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinks
     */
    omit?: SocialLinksOmit<ExtArgs> | null
    /**
     * The data needed to create a SocialLinks.
     */
    data: XOR<SocialLinksCreateInput, SocialLinksUncheckedCreateInput>
  }

  /**
   * SocialLinks createMany
   */
  export type SocialLinksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialLinks.
     */
    data: SocialLinksCreateManyInput | SocialLinksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialLinks createManyAndReturn
   */
  export type SocialLinksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinks
     */
    select?: SocialLinksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinks
     */
    omit?: SocialLinksOmit<ExtArgs> | null
    /**
     * The data used to create many SocialLinks.
     */
    data: SocialLinksCreateManyInput | SocialLinksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialLinks update
   */
  export type SocialLinksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinks
     */
    select?: SocialLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinks
     */
    omit?: SocialLinksOmit<ExtArgs> | null
    /**
     * The data needed to update a SocialLinks.
     */
    data: XOR<SocialLinksUpdateInput, SocialLinksUncheckedUpdateInput>
    /**
     * Choose, which SocialLinks to update.
     */
    where: SocialLinksWhereUniqueInput
  }

  /**
   * SocialLinks updateMany
   */
  export type SocialLinksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialLinks.
     */
    data: XOR<SocialLinksUpdateManyMutationInput, SocialLinksUncheckedUpdateManyInput>
    /**
     * Filter which SocialLinks to update
     */
    where?: SocialLinksWhereInput
    /**
     * Limit how many SocialLinks to update.
     */
    limit?: number
  }

  /**
   * SocialLinks updateManyAndReturn
   */
  export type SocialLinksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinks
     */
    select?: SocialLinksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinks
     */
    omit?: SocialLinksOmit<ExtArgs> | null
    /**
     * The data used to update SocialLinks.
     */
    data: XOR<SocialLinksUpdateManyMutationInput, SocialLinksUncheckedUpdateManyInput>
    /**
     * Filter which SocialLinks to update
     */
    where?: SocialLinksWhereInput
    /**
     * Limit how many SocialLinks to update.
     */
    limit?: number
  }

  /**
   * SocialLinks upsert
   */
  export type SocialLinksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinks
     */
    select?: SocialLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinks
     */
    omit?: SocialLinksOmit<ExtArgs> | null
    /**
     * The filter to search for the SocialLinks to update in case it exists.
     */
    where: SocialLinksWhereUniqueInput
    /**
     * In case the SocialLinks found by the `where` argument doesn't exist, create a new SocialLinks with this data.
     */
    create: XOR<SocialLinksCreateInput, SocialLinksUncheckedCreateInput>
    /**
     * In case the SocialLinks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialLinksUpdateInput, SocialLinksUncheckedUpdateInput>
  }

  /**
   * SocialLinks delete
   */
  export type SocialLinksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinks
     */
    select?: SocialLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinks
     */
    omit?: SocialLinksOmit<ExtArgs> | null
    /**
     * Filter which SocialLinks to delete.
     */
    where: SocialLinksWhereUniqueInput
  }

  /**
   * SocialLinks deleteMany
   */
  export type SocialLinksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLinks to delete
     */
    where?: SocialLinksWhereInput
    /**
     * Limit how many SocialLinks to delete.
     */
    limit?: number
  }

  /**
   * SocialLinks without action
   */
  export type SocialLinksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinks
     */
    select?: SocialLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinks
     */
    omit?: SocialLinksOmit<ExtArgs> | null
  }


  /**
   * Model Appointments
   */

  export type AggregateAppointments = {
    _count: AppointmentsCountAggregateOutputType | null
    _avg: AppointmentsAvgAggregateOutputType | null
    _sum: AppointmentsSumAggregateOutputType | null
    _min: AppointmentsMinAggregateOutputType | null
    _max: AppointmentsMaxAggregateOutputType | null
  }

  export type AppointmentsAvgAggregateOutputType = {
    id: number | null
    phoneNumber: number | null
    whatsApp: number | null
  }

  export type AppointmentsSumAggregateOutputType = {
    id: number | null
    phoneNumber: number | null
    whatsApp: number | null
  }

  export type AppointmentsMinAggregateOutputType = {
    id: number | null
    name: string | null
    phoneNumber: number | null
    whatsApp: number | null
    location: string | null
    email: string | null
  }

  export type AppointmentsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phoneNumber: number | null
    whatsApp: number | null
    location: string | null
    email: string | null
  }

  export type AppointmentsCountAggregateOutputType = {
    id: number
    name: number
    phoneNumber: number
    whatsApp: number
    location: number
    email: number
    subCategories: number
    _all: number
  }


  export type AppointmentsAvgAggregateInputType = {
    id?: true
    phoneNumber?: true
    whatsApp?: true
  }

  export type AppointmentsSumAggregateInputType = {
    id?: true
    phoneNumber?: true
    whatsApp?: true
  }

  export type AppointmentsMinAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    whatsApp?: true
    location?: true
    email?: true
  }

  export type AppointmentsMaxAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    whatsApp?: true
    location?: true
    email?: true
  }

  export type AppointmentsCountAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    whatsApp?: true
    location?: true
    email?: true
    subCategories?: true
    _all?: true
  }

  export type AppointmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to aggregate.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentsMaxAggregateInputType
  }

  export type GetAppointmentsAggregateType<T extends AppointmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointments[P]>
      : GetScalarType<T[P], AggregateAppointments[P]>
  }




  export type AppointmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentsWhereInput
    orderBy?: AppointmentsOrderByWithAggregationInput | AppointmentsOrderByWithAggregationInput[]
    by: AppointmentsScalarFieldEnum[] | AppointmentsScalarFieldEnum
    having?: AppointmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentsCountAggregateInputType | true
    _avg?: AppointmentsAvgAggregateInputType
    _sum?: AppointmentsSumAggregateInputType
    _min?: AppointmentsMinAggregateInputType
    _max?: AppointmentsMaxAggregateInputType
  }

  export type AppointmentsGroupByOutputType = {
    id: number
    name: string
    phoneNumber: number
    whatsApp: number | null
    location: string
    email: string
    subCategories: JsonValue[]
    _count: AppointmentsCountAggregateOutputType | null
    _avg: AppointmentsAvgAggregateOutputType | null
    _sum: AppointmentsSumAggregateOutputType | null
    _min: AppointmentsMinAggregateOutputType | null
    _max: AppointmentsMaxAggregateOutputType | null
  }

  type GetAppointmentsGroupByPayload<T extends AppointmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentsGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentsGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    whatsApp?: boolean
    location?: boolean
    email?: boolean
    subCategories?: boolean
  }, ExtArgs["result"]["appointments"]>

  export type AppointmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    whatsApp?: boolean
    location?: boolean
    email?: boolean
    subCategories?: boolean
  }, ExtArgs["result"]["appointments"]>

  export type AppointmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    whatsApp?: boolean
    location?: boolean
    email?: boolean
    subCategories?: boolean
  }, ExtArgs["result"]["appointments"]>

  export type AppointmentsSelectScalar = {
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    whatsApp?: boolean
    location?: boolean
    email?: boolean
    subCategories?: boolean
  }

  export type AppointmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phoneNumber" | "whatsApp" | "location" | "email" | "subCategories", ExtArgs["result"]["appointments"]>

  export type $AppointmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointments"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phoneNumber: number
      whatsApp: number | null
      location: string
      email: string
      subCategories: Prisma.JsonValue[]
    }, ExtArgs["result"]["appointments"]>
    composites: {}
  }

  type AppointmentsGetPayload<S extends boolean | null | undefined | AppointmentsDefaultArgs> = $Result.GetResult<Prisma.$AppointmentsPayload, S>

  type AppointmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentsCountAggregateInputType | true
    }

  export interface AppointmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointments'], meta: { name: 'Appointments' } }
    /**
     * Find zero or one Appointments that matches the filter.
     * @param {AppointmentsFindUniqueArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentsFindUniqueArgs>(args: SelectSubset<T, AppointmentsFindUniqueArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentsFindUniqueOrThrowArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsFindFirstArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentsFindFirstArgs>(args?: SelectSubset<T, AppointmentsFindFirstArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsFindFirstOrThrowArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointments.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentsWithIdOnly = await prisma.appointments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentsFindManyArgs>(args?: SelectSubset<T, AppointmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointments.
     * @param {AppointmentsCreateArgs} args - Arguments to create a Appointments.
     * @example
     * // Create one Appointments
     * const Appointments = await prisma.appointments.create({
     *   data: {
     *     // ... data to create a Appointments
     *   }
     * })
     * 
     */
    create<T extends AppointmentsCreateArgs>(args: SelectSubset<T, AppointmentsCreateArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentsCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointments = await prisma.appointments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentsCreateManyArgs>(args?: SelectSubset<T, AppointmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentsCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointments = await prisma.appointments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentsWithIdOnly = await prisma.appointments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointments.
     * @param {AppointmentsDeleteArgs} args - Arguments to delete one Appointments.
     * @example
     * // Delete one Appointments
     * const Appointments = await prisma.appointments.delete({
     *   where: {
     *     // ... filter to delete one Appointments
     *   }
     * })
     * 
     */
    delete<T extends AppointmentsDeleteArgs>(args: SelectSubset<T, AppointmentsDeleteArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointments.
     * @param {AppointmentsUpdateArgs} args - Arguments to update one Appointments.
     * @example
     * // Update one Appointments
     * const appointments = await prisma.appointments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentsUpdateArgs>(args: SelectSubset<T, AppointmentsUpdateArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentsDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentsDeleteManyArgs>(args?: SelectSubset<T, AppointmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointments = await prisma.appointments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentsUpdateManyArgs>(args: SelectSubset<T, AppointmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentsUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointments = await prisma.appointments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentsWithIdOnly = await prisma.appointments.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointments.
     * @param {AppointmentsUpsertArgs} args - Arguments to update or create a Appointments.
     * @example
     * // Update or create a Appointments
     * const appointments = await prisma.appointments.upsert({
     *   create: {
     *     // ... data to create a Appointments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointments we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentsUpsertArgs>(args: SelectSubset<T, AppointmentsUpsertArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointments.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentsCountArgs>(
      args?: Subset<T, AppointmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentsAggregateArgs>(args: Subset<T, AppointmentsAggregateArgs>): Prisma.PrismaPromise<GetAppointmentsAggregateType<T>>

    /**
     * Group by Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsGroupByArgs} args - Group by arguments.
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
      T extends AppointmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentsGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointments model
   */
  readonly fields: AppointmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Appointments model
   */
  interface AppointmentsFieldRefs {
    readonly id: FieldRef<"Appointments", 'Int'>
    readonly name: FieldRef<"Appointments", 'String'>
    readonly phoneNumber: FieldRef<"Appointments", 'Int'>
    readonly whatsApp: FieldRef<"Appointments", 'Int'>
    readonly location: FieldRef<"Appointments", 'String'>
    readonly email: FieldRef<"Appointments", 'String'>
    readonly subCategories: FieldRef<"Appointments", 'Json[]'>
  }
    

  // Custom InputTypes
  /**
   * Appointments findUnique
   */
  export type AppointmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments findUniqueOrThrow
   */
  export type AppointmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments findFirst
   */
  export type AppointmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Appointments findFirstOrThrow
   */
  export type AppointmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Appointments findMany
   */
  export type AppointmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Appointments create
   */
  export type AppointmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * The data needed to create a Appointments.
     */
    data: XOR<AppointmentsCreateInput, AppointmentsUncheckedCreateInput>
  }

  /**
   * Appointments createMany
   */
  export type AppointmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentsCreateManyInput | AppointmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointments createManyAndReturn
   */
  export type AppointmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentsCreateManyInput | AppointmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointments update
   */
  export type AppointmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * The data needed to update a Appointments.
     */
    data: XOR<AppointmentsUpdateInput, AppointmentsUncheckedUpdateInput>
    /**
     * Choose, which Appointments to update.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments updateMany
   */
  export type AppointmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentsUpdateManyMutationInput, AppointmentsUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentsWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointments updateManyAndReturn
   */
  export type AppointmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentsUpdateManyMutationInput, AppointmentsUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentsWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointments upsert
   */
  export type AppointmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * The filter to search for the Appointments to update in case it exists.
     */
    where: AppointmentsWhereUniqueInput
    /**
     * In case the Appointments found by the `where` argument doesn't exist, create a new Appointments with this data.
     */
    create: XOR<AppointmentsCreateInput, AppointmentsUncheckedCreateInput>
    /**
     * In case the Appointments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentsUpdateInput, AppointmentsUncheckedUpdateInput>
  }

  /**
   * Appointments delete
   */
  export type AppointmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Filter which Appointments to delete.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments deleteMany
   */
  export type AppointmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentsWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointments without action
   */
  export type AppointmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
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
    salesBannerImage: 'salesBannerImage',
    Product_Section_heading: 'Product_Section_heading',
    bottomText: 'bottomText',
    explore_Heading: 'explore_Heading',
    explore_main_heading: 'explore_main_heading',
    explore_description: 'explore_description',
    Canonical_Tag: 'Canonical_Tag',
    Meta_Description: 'Meta_Description',
    Meta_Title: 'Meta_Title',
    seoSchema: 'seoSchema'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const SubCategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    posterImageUrl: 'posterImageUrl',
    last_editedBy: 'last_editedBy',
    short_description: 'short_description',
    custom_url: 'custom_url',
    categoryId: 'categoryId',
    breadCrum: 'breadCrum',
    Banners: 'Banners',
    BannerText: 'BannerText',
    BannerHeading: 'BannerHeading',
    leftHeading: 'leftHeading',
    categoryText: 'categoryText',
    categoryHeroImages: 'categoryHeroImages',
    categoryHeroToptext: 'categoryHeroToptext',
    categoryHeroHeading: 'categoryHeroHeading',
    categoryHeroText: 'categoryHeroText',
    categoryFaqs: 'categoryFaqs',
    collectionHeading: 'collectionHeading',
    collectionMainHeading: 'collectionMainHeading',
    QualityHeadings: 'QualityHeadings',
    QualityText: 'QualityText',
    QualityImages: 'QualityImages',
    CustomHeading: 'CustomHeading',
    CustomText: 'CustomText',
    Product_Section_heading: 'Product_Section_heading',
    bottomText: 'bottomText',
    bodyHeading: 'bodyHeading',
    bodyMainHeading: 'bodyMainHeading',
    bodyText: 'bodyText',
    explore_Heading: 'explore_Heading',
    explore_main_heading: 'explore_main_heading',
    explore_description: 'explore_description',
    professionalServiceImage: 'professionalServiceImage',
    Canonical_Tag: 'Canonical_Tag',
    Meta_Description: 'Meta_Description',
    Meta_Title: 'Meta_Title',
    seoSchema: 'seoSchema'
  };

  export type SubCategoriesScalarFieldEnum = (typeof SubCategoriesScalarFieldEnum)[keyof typeof SubCategoriesScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    description: 'description',
    stock: 'stock',
    discountPrice: 'discountPrice',
    posterImageUrl: 'posterImageUrl',
    hoverImageUrl: 'hoverImageUrl',
    productImages: 'productImages',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    Canonical_Tag: 'Canonical_Tag',
    Meta_Description: 'Meta_Description',
    Meta_Title: 'Meta_Title',
    last_editedBy: 'last_editedBy',
    custom_url: 'custom_url',
    breadCrum: 'breadCrum',
    Banners: 'Banners',
    BannerText: 'BannerText',
    BannerHeading: 'BannerHeading',
    categoryHeroImages: 'categoryHeroImages',
    categoryHeroToptext: 'categoryHeroToptext',
    categoryHeroHeading: 'categoryHeroHeading',
    categoryHeroText: 'categoryHeroText',
    categoryFaqs: 'categoryFaqs',
    right_side_Heading: 'right_side_Heading',
    left_side_Text: 'left_side_Text',
    left_side_image: 'left_side_image',
    Product_Section_heading: 'Product_Section_heading',
    bottomText: 'bottomText',
    explore_Heading: 'explore_Heading',
    explore_main_heading: 'explore_main_heading',
    explore_description: 'explore_description',
    professionalServiceImage: 'professionalServiceImage',
    categoryId: 'categoryId',
    subCategoryId: 'subCategoryId',
    seoSchema: 'seoSchema'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


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


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    posterImageUrl: 'posterImageUrl',
    name: 'name',
    starRating: 'starRating',
    ReviewsDescription: 'ReviewsDescription',
    reviewDate: 'reviewDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const SocialLinksScalarFieldEnum: {
    id: 'id',
    posterImageUrl: 'posterImageUrl',
    post_links: 'post_links',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SocialLinksScalarFieldEnum = (typeof SocialLinksScalarFieldEnum)[keyof typeof SocialLinksScalarFieldEnum]


  export const AppointmentsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phoneNumber: 'phoneNumber',
    whatsApp: 'whatsApp',
    location: 'location',
    email: 'email',
    subCategories: 'subCategories'
  };

  export type AppointmentsScalarFieldEnum = (typeof AppointmentsScalarFieldEnum)[keyof typeof AppointmentsScalarFieldEnum]


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
    salesBannerImage?: JsonNullableFilter<"categories">
    Product_Section_heading?: StringNullableFilter<"categories"> | string | null
    bottomText?: StringNullableFilter<"categories"> | string | null
    explore_Heading?: StringNullableFilter<"categories"> | string | null
    explore_main_heading?: StringNullableFilter<"categories"> | string | null
    explore_description?: StringNullableFilter<"categories"> | string | null
    Canonical_Tag?: StringNullableFilter<"categories"> | string | null
    Meta_Description?: StringNullableFilter<"categories"> | string | null
    Meta_Title?: StringNullableFilter<"categories"> | string | null
    seoSchema?: StringNullableFilter<"categories"> | string | null
    subCategories?: SubCategoriesListRelationFilter
    products?: ProductsListRelationFilter
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
    salesBannerImage?: SortOrderInput | SortOrder
    Product_Section_heading?: SortOrderInput | SortOrder
    bottomText?: SortOrderInput | SortOrder
    explore_Heading?: SortOrderInput | SortOrder
    explore_main_heading?: SortOrderInput | SortOrder
    explore_description?: SortOrderInput | SortOrder
    Canonical_Tag?: SortOrderInput | SortOrder
    Meta_Description?: SortOrderInput | SortOrder
    Meta_Title?: SortOrderInput | SortOrder
    seoSchema?: SortOrderInput | SortOrder
    subCategories?: subCategoriesOrderByRelationAggregateInput
    products?: ProductsOrderByRelationAggregateInput
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
    salesBannerImage?: JsonNullableFilter<"categories">
    Product_Section_heading?: StringNullableFilter<"categories"> | string | null
    bottomText?: StringNullableFilter<"categories"> | string | null
    explore_Heading?: StringNullableFilter<"categories"> | string | null
    explore_main_heading?: StringNullableFilter<"categories"> | string | null
    explore_description?: StringNullableFilter<"categories"> | string | null
    Canonical_Tag?: StringNullableFilter<"categories"> | string | null
    Meta_Description?: StringNullableFilter<"categories"> | string | null
    Meta_Title?: StringNullableFilter<"categories"> | string | null
    seoSchema?: StringNullableFilter<"categories"> | string | null
    subCategories?: SubCategoriesListRelationFilter
    products?: ProductsListRelationFilter
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
    salesBannerImage?: SortOrderInput | SortOrder
    Product_Section_heading?: SortOrderInput | SortOrder
    bottomText?: SortOrderInput | SortOrder
    explore_Heading?: SortOrderInput | SortOrder
    explore_main_heading?: SortOrderInput | SortOrder
    explore_description?: SortOrderInput | SortOrder
    Canonical_Tag?: SortOrderInput | SortOrder
    Meta_Description?: SortOrderInput | SortOrder
    Meta_Title?: SortOrderInput | SortOrder
    seoSchema?: SortOrderInput | SortOrder
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
    salesBannerImage?: JsonNullableWithAggregatesFilter<"categories">
    Product_Section_heading?: StringNullableWithAggregatesFilter<"categories"> | string | null
    bottomText?: StringNullableWithAggregatesFilter<"categories"> | string | null
    explore_Heading?: StringNullableWithAggregatesFilter<"categories"> | string | null
    explore_main_heading?: StringNullableWithAggregatesFilter<"categories"> | string | null
    explore_description?: StringNullableWithAggregatesFilter<"categories"> | string | null
    Canonical_Tag?: StringNullableWithAggregatesFilter<"categories"> | string | null
    Meta_Description?: StringNullableWithAggregatesFilter<"categories"> | string | null
    Meta_Title?: StringNullableWithAggregatesFilter<"categories"> | string | null
    seoSchema?: StringNullableWithAggregatesFilter<"categories"> | string | null
  }

  export type subCategoriesWhereInput = {
    AND?: subCategoriesWhereInput | subCategoriesWhereInput[]
    OR?: subCategoriesWhereInput[]
    NOT?: subCategoriesWhereInput | subCategoriesWhereInput[]
    id?: IntFilter<"subCategories"> | number
    name?: StringFilter<"subCategories"> | string
    description?: StringNullableFilter<"subCategories"> | string | null
    createdAt?: DateTimeNullableFilter<"subCategories"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"subCategories"> | Date | string | null
    posterImageUrl?: JsonNullableFilter<"subCategories">
    last_editedBy?: StringNullableFilter<"subCategories"> | string | null
    short_description?: StringNullableFilter<"subCategories"> | string | null
    custom_url?: StringFilter<"subCategories"> | string
    categoryId?: IntNullableFilter<"subCategories"> | number | null
    breadCrum?: StringNullableFilter<"subCategories"> | string | null
    Banners?: JsonNullableFilter<"subCategories">
    BannerText?: StringNullableFilter<"subCategories"> | string | null
    BannerHeading?: StringNullableFilter<"subCategories"> | string | null
    leftHeading?: StringNullableFilter<"subCategories"> | string | null
    categoryText?: JsonNullableListFilter<"subCategories">
    categoryHeroImages?: JsonNullableListFilter<"subCategories">
    categoryHeroToptext?: StringNullableFilter<"subCategories"> | string | null
    categoryHeroHeading?: StringNullableFilter<"subCategories"> | string | null
    categoryHeroText?: JsonNullableListFilter<"subCategories">
    categoryFaqs?: JsonNullableListFilter<"subCategories">
    collectionHeading?: StringNullableFilter<"subCategories"> | string | null
    collectionMainHeading?: StringNullableFilter<"subCategories"> | string | null
    QualityHeadings?: JsonNullableListFilter<"subCategories">
    QualityText?: JsonNullableListFilter<"subCategories">
    QualityImages?: JsonNullableListFilter<"subCategories">
    CustomHeading?: JsonNullableListFilter<"subCategories">
    CustomText?: JsonNullableListFilter<"subCategories">
    Product_Section_heading?: StringNullableFilter<"subCategories"> | string | null
    bottomText?: StringNullableFilter<"subCategories"> | string | null
    bodyHeading?: StringNullableFilter<"subCategories"> | string | null
    bodyMainHeading?: StringNullableFilter<"subCategories"> | string | null
    bodyText?: StringNullableFilter<"subCategories"> | string | null
    explore_Heading?: StringNullableFilter<"subCategories"> | string | null
    explore_main_heading?: StringNullableFilter<"subCategories"> | string | null
    explore_description?: StringNullableFilter<"subCategories"> | string | null
    professionalServiceImage?: JsonNullableFilter<"subCategories">
    Canonical_Tag?: StringNullableFilter<"subCategories"> | string | null
    Meta_Description?: StringNullableFilter<"subCategories"> | string | null
    Meta_Title?: StringNullableFilter<"subCategories"> | string | null
    seoSchema?: StringNullableFilter<"subCategories"> | string | null
    category?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    products?: ProductsListRelationFilter
  }

  export type subCategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    posterImageUrl?: SortOrderInput | SortOrder
    last_editedBy?: SortOrderInput | SortOrder
    short_description?: SortOrderInput | SortOrder
    custom_url?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    breadCrum?: SortOrderInput | SortOrder
    Banners?: SortOrderInput | SortOrder
    BannerText?: SortOrderInput | SortOrder
    BannerHeading?: SortOrderInput | SortOrder
    leftHeading?: SortOrderInput | SortOrder
    categoryText?: SortOrder
    categoryHeroImages?: SortOrder
    categoryHeroToptext?: SortOrderInput | SortOrder
    categoryHeroHeading?: SortOrderInput | SortOrder
    categoryHeroText?: SortOrder
    categoryFaqs?: SortOrder
    collectionHeading?: SortOrderInput | SortOrder
    collectionMainHeading?: SortOrderInput | SortOrder
    QualityHeadings?: SortOrder
    QualityText?: SortOrder
    QualityImages?: SortOrder
    CustomHeading?: SortOrder
    CustomText?: SortOrder
    Product_Section_heading?: SortOrderInput | SortOrder
    bottomText?: SortOrderInput | SortOrder
    bodyHeading?: SortOrderInput | SortOrder
    bodyMainHeading?: SortOrderInput | SortOrder
    bodyText?: SortOrderInput | SortOrder
    explore_Heading?: SortOrderInput | SortOrder
    explore_main_heading?: SortOrderInput | SortOrder
    explore_description?: SortOrderInput | SortOrder
    professionalServiceImage?: SortOrderInput | SortOrder
    Canonical_Tag?: SortOrderInput | SortOrder
    Meta_Description?: SortOrderInput | SortOrder
    Meta_Title?: SortOrderInput | SortOrder
    seoSchema?: SortOrderInput | SortOrder
    category?: categoriesOrderByWithRelationInput
    products?: ProductsOrderByRelationAggregateInput
  }

  export type subCategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: subCategoriesWhereInput | subCategoriesWhereInput[]
    OR?: subCategoriesWhereInput[]
    NOT?: subCategoriesWhereInput | subCategoriesWhereInput[]
    name?: StringFilter<"subCategories"> | string
    description?: StringNullableFilter<"subCategories"> | string | null
    createdAt?: DateTimeNullableFilter<"subCategories"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"subCategories"> | Date | string | null
    posterImageUrl?: JsonNullableFilter<"subCategories">
    last_editedBy?: StringNullableFilter<"subCategories"> | string | null
    short_description?: StringNullableFilter<"subCategories"> | string | null
    custom_url?: StringFilter<"subCategories"> | string
    categoryId?: IntNullableFilter<"subCategories"> | number | null
    breadCrum?: StringNullableFilter<"subCategories"> | string | null
    Banners?: JsonNullableFilter<"subCategories">
    BannerText?: StringNullableFilter<"subCategories"> | string | null
    BannerHeading?: StringNullableFilter<"subCategories"> | string | null
    leftHeading?: StringNullableFilter<"subCategories"> | string | null
    categoryText?: JsonNullableListFilter<"subCategories">
    categoryHeroImages?: JsonNullableListFilter<"subCategories">
    categoryHeroToptext?: StringNullableFilter<"subCategories"> | string | null
    categoryHeroHeading?: StringNullableFilter<"subCategories"> | string | null
    categoryHeroText?: JsonNullableListFilter<"subCategories">
    categoryFaqs?: JsonNullableListFilter<"subCategories">
    collectionHeading?: StringNullableFilter<"subCategories"> | string | null
    collectionMainHeading?: StringNullableFilter<"subCategories"> | string | null
    QualityHeadings?: JsonNullableListFilter<"subCategories">
    QualityText?: JsonNullableListFilter<"subCategories">
    QualityImages?: JsonNullableListFilter<"subCategories">
    CustomHeading?: JsonNullableListFilter<"subCategories">
    CustomText?: JsonNullableListFilter<"subCategories">
    Product_Section_heading?: StringNullableFilter<"subCategories"> | string | null
    bottomText?: StringNullableFilter<"subCategories"> | string | null
    bodyHeading?: StringNullableFilter<"subCategories"> | string | null
    bodyMainHeading?: StringNullableFilter<"subCategories"> | string | null
    bodyText?: StringNullableFilter<"subCategories"> | string | null
    explore_Heading?: StringNullableFilter<"subCategories"> | string | null
    explore_main_heading?: StringNullableFilter<"subCategories"> | string | null
    explore_description?: StringNullableFilter<"subCategories"> | string | null
    professionalServiceImage?: JsonNullableFilter<"subCategories">
    Canonical_Tag?: StringNullableFilter<"subCategories"> | string | null
    Meta_Description?: StringNullableFilter<"subCategories"> | string | null
    Meta_Title?: StringNullableFilter<"subCategories"> | string | null
    seoSchema?: StringNullableFilter<"subCategories"> | string | null
    category?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    products?: ProductsListRelationFilter
  }, "id">

  export type subCategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    posterImageUrl?: SortOrderInput | SortOrder
    last_editedBy?: SortOrderInput | SortOrder
    short_description?: SortOrderInput | SortOrder
    custom_url?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    breadCrum?: SortOrderInput | SortOrder
    Banners?: SortOrderInput | SortOrder
    BannerText?: SortOrderInput | SortOrder
    BannerHeading?: SortOrderInput | SortOrder
    leftHeading?: SortOrderInput | SortOrder
    categoryText?: SortOrder
    categoryHeroImages?: SortOrder
    categoryHeroToptext?: SortOrderInput | SortOrder
    categoryHeroHeading?: SortOrderInput | SortOrder
    categoryHeroText?: SortOrder
    categoryFaqs?: SortOrder
    collectionHeading?: SortOrderInput | SortOrder
    collectionMainHeading?: SortOrderInput | SortOrder
    QualityHeadings?: SortOrder
    QualityText?: SortOrder
    QualityImages?: SortOrder
    CustomHeading?: SortOrder
    CustomText?: SortOrder
    Product_Section_heading?: SortOrderInput | SortOrder
    bottomText?: SortOrderInput | SortOrder
    bodyHeading?: SortOrderInput | SortOrder
    bodyMainHeading?: SortOrderInput | SortOrder
    bodyText?: SortOrderInput | SortOrder
    explore_Heading?: SortOrderInput | SortOrder
    explore_main_heading?: SortOrderInput | SortOrder
    explore_description?: SortOrderInput | SortOrder
    professionalServiceImage?: SortOrderInput | SortOrder
    Canonical_Tag?: SortOrderInput | SortOrder
    Meta_Description?: SortOrderInput | SortOrder
    Meta_Title?: SortOrderInput | SortOrder
    seoSchema?: SortOrderInput | SortOrder
    _count?: subCategoriesCountOrderByAggregateInput
    _avg?: subCategoriesAvgOrderByAggregateInput
    _max?: subCategoriesMaxOrderByAggregateInput
    _min?: subCategoriesMinOrderByAggregateInput
    _sum?: subCategoriesSumOrderByAggregateInput
  }

  export type subCategoriesScalarWhereWithAggregatesInput = {
    AND?: subCategoriesScalarWhereWithAggregatesInput | subCategoriesScalarWhereWithAggregatesInput[]
    OR?: subCategoriesScalarWhereWithAggregatesInput[]
    NOT?: subCategoriesScalarWhereWithAggregatesInput | subCategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"subCategories"> | number
    name?: StringWithAggregatesFilter<"subCategories"> | string
    description?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"subCategories"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"subCategories"> | Date | string | null
    posterImageUrl?: JsonNullableWithAggregatesFilter<"subCategories">
    last_editedBy?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
    short_description?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
    custom_url?: StringWithAggregatesFilter<"subCategories"> | string
    categoryId?: IntNullableWithAggregatesFilter<"subCategories"> | number | null
    breadCrum?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
    Banners?: JsonNullableWithAggregatesFilter<"subCategories">
    BannerText?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
    BannerHeading?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
    leftHeading?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
    categoryText?: JsonNullableListFilter<"subCategories">
    categoryHeroImages?: JsonNullableListFilter<"subCategories">
    categoryHeroToptext?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
    categoryHeroHeading?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
    categoryHeroText?: JsonNullableListFilter<"subCategories">
    categoryFaqs?: JsonNullableListFilter<"subCategories">
    collectionHeading?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
    collectionMainHeading?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
    QualityHeadings?: JsonNullableListFilter<"subCategories">
    QualityText?: JsonNullableListFilter<"subCategories">
    QualityImages?: JsonNullableListFilter<"subCategories">
    CustomHeading?: JsonNullableListFilter<"subCategories">
    CustomText?: JsonNullableListFilter<"subCategories">
    Product_Section_heading?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
    bottomText?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
    bodyHeading?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
    bodyMainHeading?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
    bodyText?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
    explore_Heading?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
    explore_main_heading?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
    explore_description?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
    professionalServiceImage?: JsonNullableWithAggregatesFilter<"subCategories">
    Canonical_Tag?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
    Meta_Description?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
    Meta_Title?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
    seoSchema?: StringNullableWithAggregatesFilter<"subCategories"> | string | null
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    id?: IntFilter<"Products"> | number
    name?: StringFilter<"Products"> | string
    price?: IntFilter<"Products"> | number
    description?: StringFilter<"Products"> | string
    stock?: IntFilter<"Products"> | number
    discountPrice?: IntNullableFilter<"Products"> | number | null
    posterImageUrl?: JsonFilter<"Products">
    hoverImageUrl?: JsonNullableFilter<"Products">
    productImages?: JsonNullableListFilter<"Products">
    createdAt?: DateTimeNullableFilter<"Products"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Products"> | Date | string | null
    Canonical_Tag?: StringNullableFilter<"Products"> | string | null
    Meta_Description?: StringNullableFilter<"Products"> | string | null
    Meta_Title?: StringNullableFilter<"Products"> | string | null
    last_editedBy?: StringNullableFilter<"Products"> | string | null
    custom_url?: StringFilter<"Products"> | string
    breadCrum?: StringNullableFilter<"Products"> | string | null
    Banners?: JsonNullableFilter<"Products">
    BannerText?: StringNullableFilter<"Products"> | string | null
    BannerHeading?: StringNullableFilter<"Products"> | string | null
    categoryHeroImages?: JsonNullableListFilter<"Products">
    categoryHeroToptext?: StringNullableFilter<"Products"> | string | null
    categoryHeroHeading?: StringNullableFilter<"Products"> | string | null
    categoryHeroText?: JsonNullableListFilter<"Products">
    categoryFaqs?: JsonNullableListFilter<"Products">
    right_side_Heading?: StringNullableFilter<"Products"> | string | null
    left_side_Text?: JsonNullableListFilter<"Products">
    left_side_image?: JsonNullableFilter<"Products">
    Product_Section_heading?: StringNullableFilter<"Products"> | string | null
    bottomText?: StringNullableFilter<"Products"> | string | null
    explore_Heading?: StringNullableFilter<"Products"> | string | null
    explore_main_heading?: StringNullableFilter<"Products"> | string | null
    explore_description?: StringNullableFilter<"Products"> | string | null
    professionalServiceImage?: JsonNullableFilter<"Products">
    categoryId?: IntNullableFilter<"Products"> | number | null
    subCategoryId?: IntNullableFilter<"Products"> | number | null
    seoSchema?: StringNullableFilter<"Products"> | string | null
    category?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    subcategory?: XOR<SubCategoriesNullableScalarRelationFilter, subCategoriesWhereInput> | null
  }

  export type ProductsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    stock?: SortOrder
    discountPrice?: SortOrderInput | SortOrder
    posterImageUrl?: SortOrder
    hoverImageUrl?: SortOrderInput | SortOrder
    productImages?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    Canonical_Tag?: SortOrderInput | SortOrder
    Meta_Description?: SortOrderInput | SortOrder
    Meta_Title?: SortOrderInput | SortOrder
    last_editedBy?: SortOrderInput | SortOrder
    custom_url?: SortOrder
    breadCrum?: SortOrderInput | SortOrder
    Banners?: SortOrderInput | SortOrder
    BannerText?: SortOrderInput | SortOrder
    BannerHeading?: SortOrderInput | SortOrder
    categoryHeroImages?: SortOrder
    categoryHeroToptext?: SortOrderInput | SortOrder
    categoryHeroHeading?: SortOrderInput | SortOrder
    categoryHeroText?: SortOrder
    categoryFaqs?: SortOrder
    right_side_Heading?: SortOrderInput | SortOrder
    left_side_Text?: SortOrder
    left_side_image?: SortOrderInput | SortOrder
    Product_Section_heading?: SortOrderInput | SortOrder
    bottomText?: SortOrderInput | SortOrder
    explore_Heading?: SortOrderInput | SortOrder
    explore_main_heading?: SortOrderInput | SortOrder
    explore_description?: SortOrderInput | SortOrder
    professionalServiceImage?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    subCategoryId?: SortOrderInput | SortOrder
    seoSchema?: SortOrderInput | SortOrder
    category?: categoriesOrderByWithRelationInput
    subcategory?: subCategoriesOrderByWithRelationInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    name?: StringFilter<"Products"> | string
    price?: IntFilter<"Products"> | number
    description?: StringFilter<"Products"> | string
    stock?: IntFilter<"Products"> | number
    discountPrice?: IntNullableFilter<"Products"> | number | null
    posterImageUrl?: JsonFilter<"Products">
    hoverImageUrl?: JsonNullableFilter<"Products">
    productImages?: JsonNullableListFilter<"Products">
    createdAt?: DateTimeNullableFilter<"Products"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Products"> | Date | string | null
    Canonical_Tag?: StringNullableFilter<"Products"> | string | null
    Meta_Description?: StringNullableFilter<"Products"> | string | null
    Meta_Title?: StringNullableFilter<"Products"> | string | null
    last_editedBy?: StringNullableFilter<"Products"> | string | null
    custom_url?: StringFilter<"Products"> | string
    breadCrum?: StringNullableFilter<"Products"> | string | null
    Banners?: JsonNullableFilter<"Products">
    BannerText?: StringNullableFilter<"Products"> | string | null
    BannerHeading?: StringNullableFilter<"Products"> | string | null
    categoryHeroImages?: JsonNullableListFilter<"Products">
    categoryHeroToptext?: StringNullableFilter<"Products"> | string | null
    categoryHeroHeading?: StringNullableFilter<"Products"> | string | null
    categoryHeroText?: JsonNullableListFilter<"Products">
    categoryFaqs?: JsonNullableListFilter<"Products">
    right_side_Heading?: StringNullableFilter<"Products"> | string | null
    left_side_Text?: JsonNullableListFilter<"Products">
    left_side_image?: JsonNullableFilter<"Products">
    Product_Section_heading?: StringNullableFilter<"Products"> | string | null
    bottomText?: StringNullableFilter<"Products"> | string | null
    explore_Heading?: StringNullableFilter<"Products"> | string | null
    explore_main_heading?: StringNullableFilter<"Products"> | string | null
    explore_description?: StringNullableFilter<"Products"> | string | null
    professionalServiceImage?: JsonNullableFilter<"Products">
    categoryId?: IntNullableFilter<"Products"> | number | null
    subCategoryId?: IntNullableFilter<"Products"> | number | null
    seoSchema?: StringNullableFilter<"Products"> | string | null
    category?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    subcategory?: XOR<SubCategoriesNullableScalarRelationFilter, subCategoriesWhereInput> | null
  }, "id">

  export type ProductsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    stock?: SortOrder
    discountPrice?: SortOrderInput | SortOrder
    posterImageUrl?: SortOrder
    hoverImageUrl?: SortOrderInput | SortOrder
    productImages?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    Canonical_Tag?: SortOrderInput | SortOrder
    Meta_Description?: SortOrderInput | SortOrder
    Meta_Title?: SortOrderInput | SortOrder
    last_editedBy?: SortOrderInput | SortOrder
    custom_url?: SortOrder
    breadCrum?: SortOrderInput | SortOrder
    Banners?: SortOrderInput | SortOrder
    BannerText?: SortOrderInput | SortOrder
    BannerHeading?: SortOrderInput | SortOrder
    categoryHeroImages?: SortOrder
    categoryHeroToptext?: SortOrderInput | SortOrder
    categoryHeroHeading?: SortOrderInput | SortOrder
    categoryHeroText?: SortOrder
    categoryFaqs?: SortOrder
    right_side_Heading?: SortOrderInput | SortOrder
    left_side_Text?: SortOrder
    left_side_image?: SortOrderInput | SortOrder
    Product_Section_heading?: SortOrderInput | SortOrder
    bottomText?: SortOrderInput | SortOrder
    explore_Heading?: SortOrderInput | SortOrder
    explore_main_heading?: SortOrderInput | SortOrder
    explore_description?: SortOrderInput | SortOrder
    professionalServiceImage?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    subCategoryId?: SortOrderInput | SortOrder
    seoSchema?: SortOrderInput | SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Products"> | number
    name?: StringWithAggregatesFilter<"Products"> | string
    price?: IntWithAggregatesFilter<"Products"> | number
    description?: StringWithAggregatesFilter<"Products"> | string
    stock?: IntWithAggregatesFilter<"Products"> | number
    discountPrice?: IntNullableWithAggregatesFilter<"Products"> | number | null
    posterImageUrl?: JsonWithAggregatesFilter<"Products">
    hoverImageUrl?: JsonNullableWithAggregatesFilter<"Products">
    productImages?: JsonNullableListFilter<"Products">
    createdAt?: DateTimeNullableWithAggregatesFilter<"Products"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Products"> | Date | string | null
    Canonical_Tag?: StringNullableWithAggregatesFilter<"Products"> | string | null
    Meta_Description?: StringNullableWithAggregatesFilter<"Products"> | string | null
    Meta_Title?: StringNullableWithAggregatesFilter<"Products"> | string | null
    last_editedBy?: StringNullableWithAggregatesFilter<"Products"> | string | null
    custom_url?: StringWithAggregatesFilter<"Products"> | string
    breadCrum?: StringNullableWithAggregatesFilter<"Products"> | string | null
    Banners?: JsonNullableWithAggregatesFilter<"Products">
    BannerText?: StringNullableWithAggregatesFilter<"Products"> | string | null
    BannerHeading?: StringNullableWithAggregatesFilter<"Products"> | string | null
    categoryHeroImages?: JsonNullableListFilter<"Products">
    categoryHeroToptext?: StringNullableWithAggregatesFilter<"Products"> | string | null
    categoryHeroHeading?: StringNullableWithAggregatesFilter<"Products"> | string | null
    categoryHeroText?: JsonNullableListFilter<"Products">
    categoryFaqs?: JsonNullableListFilter<"Products">
    right_side_Heading?: StringNullableWithAggregatesFilter<"Products"> | string | null
    left_side_Text?: JsonNullableListFilter<"Products">
    left_side_image?: JsonNullableWithAggregatesFilter<"Products">
    Product_Section_heading?: StringNullableWithAggregatesFilter<"Products"> | string | null
    bottomText?: StringNullableWithAggregatesFilter<"Products"> | string | null
    explore_Heading?: StringNullableWithAggregatesFilter<"Products"> | string | null
    explore_main_heading?: StringNullableWithAggregatesFilter<"Products"> | string | null
    explore_description?: StringNullableWithAggregatesFilter<"Products"> | string | null
    professionalServiceImage?: JsonNullableWithAggregatesFilter<"Products">
    categoryId?: IntNullableWithAggregatesFilter<"Products"> | number | null
    subCategoryId?: IntNullableWithAggregatesFilter<"Products"> | number | null
    seoSchema?: StringNullableWithAggregatesFilter<"Products"> | string | null
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

  export type ReviewsWhereInput = {
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    id?: IntFilter<"Reviews"> | number
    posterImageUrl?: JsonNullableFilter<"Reviews">
    name?: StringFilter<"Reviews"> | string
    starRating?: IntNullableFilter<"Reviews"> | number | null
    ReviewsDescription?: StringFilter<"Reviews"> | string
    reviewDate?: StringNullableFilter<"Reviews"> | string | null
    createdAt?: DateTimeNullableFilter<"Reviews"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Reviews"> | Date | string | null
  }

  export type ReviewsOrderByWithRelationInput = {
    id?: SortOrder
    posterImageUrl?: SortOrderInput | SortOrder
    name?: SortOrder
    starRating?: SortOrderInput | SortOrder
    ReviewsDescription?: SortOrder
    reviewDate?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    posterImageUrl?: JsonNullableFilter<"Reviews">
    name?: StringFilter<"Reviews"> | string
    starRating?: IntNullableFilter<"Reviews"> | number | null
    ReviewsDescription?: StringFilter<"Reviews"> | string
    reviewDate?: StringNullableFilter<"Reviews"> | string | null
    createdAt?: DateTimeNullableFilter<"Reviews"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Reviews"> | Date | string | null
  }, "id">

  export type ReviewsOrderByWithAggregationInput = {
    id?: SortOrder
    posterImageUrl?: SortOrderInput | SortOrder
    name?: SortOrder
    starRating?: SortOrderInput | SortOrder
    ReviewsDescription?: SortOrder
    reviewDate?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ReviewsCountOrderByAggregateInput
    _avg?: ReviewsAvgOrderByAggregateInput
    _max?: ReviewsMaxOrderByAggregateInput
    _min?: ReviewsMinOrderByAggregateInput
    _sum?: ReviewsSumOrderByAggregateInput
  }

  export type ReviewsScalarWhereWithAggregatesInput = {
    AND?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    OR?: ReviewsScalarWhereWithAggregatesInput[]
    NOT?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reviews"> | number
    posterImageUrl?: JsonNullableWithAggregatesFilter<"Reviews">
    name?: StringWithAggregatesFilter<"Reviews"> | string
    starRating?: IntNullableWithAggregatesFilter<"Reviews"> | number | null
    ReviewsDescription?: StringWithAggregatesFilter<"Reviews"> | string
    reviewDate?: StringNullableWithAggregatesFilter<"Reviews"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Reviews"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Reviews"> | Date | string | null
  }

  export type SocialLinksWhereInput = {
    AND?: SocialLinksWhereInput | SocialLinksWhereInput[]
    OR?: SocialLinksWhereInput[]
    NOT?: SocialLinksWhereInput | SocialLinksWhereInput[]
    id?: IntFilter<"SocialLinks"> | number
    posterImageUrl?: JsonFilter<"SocialLinks">
    post_links?: StringFilter<"SocialLinks"> | string
    createdAt?: DateTimeNullableFilter<"SocialLinks"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"SocialLinks"> | Date | string | null
  }

  export type SocialLinksOrderByWithRelationInput = {
    id?: SortOrder
    posterImageUrl?: SortOrder
    post_links?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type SocialLinksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SocialLinksWhereInput | SocialLinksWhereInput[]
    OR?: SocialLinksWhereInput[]
    NOT?: SocialLinksWhereInput | SocialLinksWhereInput[]
    posterImageUrl?: JsonFilter<"SocialLinks">
    post_links?: StringFilter<"SocialLinks"> | string
    createdAt?: DateTimeNullableFilter<"SocialLinks"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"SocialLinks"> | Date | string | null
  }, "id">

  export type SocialLinksOrderByWithAggregationInput = {
    id?: SortOrder
    posterImageUrl?: SortOrder
    post_links?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: SocialLinksCountOrderByAggregateInput
    _avg?: SocialLinksAvgOrderByAggregateInput
    _max?: SocialLinksMaxOrderByAggregateInput
    _min?: SocialLinksMinOrderByAggregateInput
    _sum?: SocialLinksSumOrderByAggregateInput
  }

  export type SocialLinksScalarWhereWithAggregatesInput = {
    AND?: SocialLinksScalarWhereWithAggregatesInput | SocialLinksScalarWhereWithAggregatesInput[]
    OR?: SocialLinksScalarWhereWithAggregatesInput[]
    NOT?: SocialLinksScalarWhereWithAggregatesInput | SocialLinksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SocialLinks"> | number
    posterImageUrl?: JsonWithAggregatesFilter<"SocialLinks">
    post_links?: StringWithAggregatesFilter<"SocialLinks"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"SocialLinks"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"SocialLinks"> | Date | string | null
  }

  export type AppointmentsWhereInput = {
    AND?: AppointmentsWhereInput | AppointmentsWhereInput[]
    OR?: AppointmentsWhereInput[]
    NOT?: AppointmentsWhereInput | AppointmentsWhereInput[]
    id?: IntFilter<"Appointments"> | number
    name?: StringFilter<"Appointments"> | string
    phoneNumber?: IntFilter<"Appointments"> | number
    whatsApp?: IntNullableFilter<"Appointments"> | number | null
    location?: StringFilter<"Appointments"> | string
    email?: StringFilter<"Appointments"> | string
    subCategories?: JsonNullableListFilter<"Appointments">
  }

  export type AppointmentsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    whatsApp?: SortOrderInput | SortOrder
    location?: SortOrder
    email?: SortOrder
    subCategories?: SortOrder
  }

  export type AppointmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppointmentsWhereInput | AppointmentsWhereInput[]
    OR?: AppointmentsWhereInput[]
    NOT?: AppointmentsWhereInput | AppointmentsWhereInput[]
    name?: StringFilter<"Appointments"> | string
    phoneNumber?: IntFilter<"Appointments"> | number
    whatsApp?: IntNullableFilter<"Appointments"> | number | null
    location?: StringFilter<"Appointments"> | string
    email?: StringFilter<"Appointments"> | string
    subCategories?: JsonNullableListFilter<"Appointments">
  }, "id">

  export type AppointmentsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    whatsApp?: SortOrderInput | SortOrder
    location?: SortOrder
    email?: SortOrder
    subCategories?: SortOrder
    _count?: AppointmentsCountOrderByAggregateInput
    _avg?: AppointmentsAvgOrderByAggregateInput
    _max?: AppointmentsMaxOrderByAggregateInput
    _min?: AppointmentsMinOrderByAggregateInput
    _sum?: AppointmentsSumOrderByAggregateInput
  }

  export type AppointmentsScalarWhereWithAggregatesInput = {
    AND?: AppointmentsScalarWhereWithAggregatesInput | AppointmentsScalarWhereWithAggregatesInput[]
    OR?: AppointmentsScalarWhereWithAggregatesInput[]
    NOT?: AppointmentsScalarWhereWithAggregatesInput | AppointmentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appointments"> | number
    name?: StringWithAggregatesFilter<"Appointments"> | string
    phoneNumber?: IntWithAggregatesFilter<"Appointments"> | number
    whatsApp?: IntNullableWithAggregatesFilter<"Appointments"> | number | null
    location?: StringWithAggregatesFilter<"Appointments"> | string
    email?: StringWithAggregatesFilter<"Appointments"> | string
    subCategories?: JsonNullableListFilter<"Appointments">
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
    salesBannerImage?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: string | null
    bottomText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    seoSchema?: string | null
    subCategories?: subCategoriesCreateNestedManyWithoutCategoryInput
    products?: ProductsCreateNestedManyWithoutCategoryInput
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
    salesBannerImage?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: string | null
    bottomText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    seoSchema?: string | null
    subCategories?: subCategoriesUncheckedCreateNestedManyWithoutCategoryInput
    products?: ProductsUncheckedCreateNestedManyWithoutCategoryInput
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
    salesBannerImage?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
    subCategories?: subCategoriesUpdateManyWithoutCategoryNestedInput
    products?: ProductsUpdateManyWithoutCategoryNestedInput
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
    salesBannerImage?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
    subCategories?: subCategoriesUncheckedUpdateManyWithoutCategoryNestedInput
    products?: ProductsUncheckedUpdateManyWithoutCategoryNestedInput
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
    salesBannerImage?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: string | null
    bottomText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    seoSchema?: string | null
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
    salesBannerImage?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
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
    salesBannerImage?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type subCategoriesCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    last_editedBy?: string | null
    short_description?: string | null
    custom_url: string
    breadCrum?: string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: string | null
    BannerHeading?: string | null
    leftHeading?: string | null
    categoryText?: subCategoriesCreatecategoryTextInput | InputJsonValue[]
    categoryHeroImages?: subCategoriesCreatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: string | null
    categoryHeroHeading?: string | null
    categoryHeroText?: subCategoriesCreatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: subCategoriesCreatecategoryFaqsInput | InputJsonValue[]
    collectionHeading?: string | null
    collectionMainHeading?: string | null
    QualityHeadings?: subCategoriesCreateQualityHeadingsInput | InputJsonValue[]
    QualityText?: subCategoriesCreateQualityTextInput | InputJsonValue[]
    QualityImages?: subCategoriesCreateQualityImagesInput | InputJsonValue[]
    CustomHeading?: subCategoriesCreateCustomHeadingInput | InputJsonValue[]
    CustomText?: subCategoriesCreateCustomTextInput | InputJsonValue[]
    Product_Section_heading?: string | null
    bottomText?: string | null
    bodyHeading?: string | null
    bodyMainHeading?: string | null
    bodyText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    seoSchema?: string | null
    category?: categoriesCreateNestedOneWithoutSubCategoriesInput
    products?: ProductsCreateNestedManyWithoutSubcategoryInput
  }

  export type subCategoriesUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    last_editedBy?: string | null
    short_description?: string | null
    custom_url: string
    categoryId?: number | null
    breadCrum?: string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: string | null
    BannerHeading?: string | null
    leftHeading?: string | null
    categoryText?: subCategoriesCreatecategoryTextInput | InputJsonValue[]
    categoryHeroImages?: subCategoriesCreatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: string | null
    categoryHeroHeading?: string | null
    categoryHeroText?: subCategoriesCreatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: subCategoriesCreatecategoryFaqsInput | InputJsonValue[]
    collectionHeading?: string | null
    collectionMainHeading?: string | null
    QualityHeadings?: subCategoriesCreateQualityHeadingsInput | InputJsonValue[]
    QualityText?: subCategoriesCreateQualityTextInput | InputJsonValue[]
    QualityImages?: subCategoriesCreateQualityImagesInput | InputJsonValue[]
    CustomHeading?: subCategoriesCreateCustomHeadingInput | InputJsonValue[]
    CustomText?: subCategoriesCreateCustomTextInput | InputJsonValue[]
    Product_Section_heading?: string | null
    bottomText?: string | null
    bodyHeading?: string | null
    bodyMainHeading?: string | null
    bodyText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    seoSchema?: string | null
    products?: ProductsUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type subCategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    leftHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryText?: subCategoriesUpdatecategoryTextInput | InputJsonValue[]
    categoryHeroImages?: subCategoriesUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: subCategoriesUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: subCategoriesUpdatecategoryFaqsInput | InputJsonValue[]
    collectionHeading?: NullableStringFieldUpdateOperationsInput | string | null
    collectionMainHeading?: NullableStringFieldUpdateOperationsInput | string | null
    QualityHeadings?: subCategoriesUpdateQualityHeadingsInput | InputJsonValue[]
    QualityText?: subCategoriesUpdateQualityTextInput | InputJsonValue[]
    QualityImages?: subCategoriesUpdateQualityImagesInput | InputJsonValue[]
    CustomHeading?: subCategoriesUpdateCustomHeadingInput | InputJsonValue[]
    CustomText?: subCategoriesUpdateCustomTextInput | InputJsonValue[]
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    bodyHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyMainHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
    category?: categoriesUpdateOneWithoutSubCategoriesNestedInput
    products?: ProductsUpdateManyWithoutSubcategoryNestedInput
  }

  export type subCategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    leftHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryText?: subCategoriesUpdatecategoryTextInput | InputJsonValue[]
    categoryHeroImages?: subCategoriesUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: subCategoriesUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: subCategoriesUpdatecategoryFaqsInput | InputJsonValue[]
    collectionHeading?: NullableStringFieldUpdateOperationsInput | string | null
    collectionMainHeading?: NullableStringFieldUpdateOperationsInput | string | null
    QualityHeadings?: subCategoriesUpdateQualityHeadingsInput | InputJsonValue[]
    QualityText?: subCategoriesUpdateQualityTextInput | InputJsonValue[]
    QualityImages?: subCategoriesUpdateQualityImagesInput | InputJsonValue[]
    CustomHeading?: subCategoriesUpdateCustomHeadingInput | InputJsonValue[]
    CustomText?: subCategoriesUpdateCustomTextInput | InputJsonValue[]
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    bodyHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyMainHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductsUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type subCategoriesCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    last_editedBy?: string | null
    short_description?: string | null
    custom_url: string
    categoryId?: number | null
    breadCrum?: string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: string | null
    BannerHeading?: string | null
    leftHeading?: string | null
    categoryText?: subCategoriesCreatecategoryTextInput | InputJsonValue[]
    categoryHeroImages?: subCategoriesCreatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: string | null
    categoryHeroHeading?: string | null
    categoryHeroText?: subCategoriesCreatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: subCategoriesCreatecategoryFaqsInput | InputJsonValue[]
    collectionHeading?: string | null
    collectionMainHeading?: string | null
    QualityHeadings?: subCategoriesCreateQualityHeadingsInput | InputJsonValue[]
    QualityText?: subCategoriesCreateQualityTextInput | InputJsonValue[]
    QualityImages?: subCategoriesCreateQualityImagesInput | InputJsonValue[]
    CustomHeading?: subCategoriesCreateCustomHeadingInput | InputJsonValue[]
    CustomText?: subCategoriesCreateCustomTextInput | InputJsonValue[]
    Product_Section_heading?: string | null
    bottomText?: string | null
    bodyHeading?: string | null
    bodyMainHeading?: string | null
    bodyText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    seoSchema?: string | null
  }

  export type subCategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    leftHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryText?: subCategoriesUpdatecategoryTextInput | InputJsonValue[]
    categoryHeroImages?: subCategoriesUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: subCategoriesUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: subCategoriesUpdatecategoryFaqsInput | InputJsonValue[]
    collectionHeading?: NullableStringFieldUpdateOperationsInput | string | null
    collectionMainHeading?: NullableStringFieldUpdateOperationsInput | string | null
    QualityHeadings?: subCategoriesUpdateQualityHeadingsInput | InputJsonValue[]
    QualityText?: subCategoriesUpdateQualityTextInput | InputJsonValue[]
    QualityImages?: subCategoriesUpdateQualityImagesInput | InputJsonValue[]
    CustomHeading?: subCategoriesUpdateCustomHeadingInput | InputJsonValue[]
    CustomText?: subCategoriesUpdateCustomTextInput | InputJsonValue[]
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    bodyHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyMainHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type subCategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    leftHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryText?: subCategoriesUpdatecategoryTextInput | InputJsonValue[]
    categoryHeroImages?: subCategoriesUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: subCategoriesUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: subCategoriesUpdatecategoryFaqsInput | InputJsonValue[]
    collectionHeading?: NullableStringFieldUpdateOperationsInput | string | null
    collectionMainHeading?: NullableStringFieldUpdateOperationsInput | string | null
    QualityHeadings?: subCategoriesUpdateQualityHeadingsInput | InputJsonValue[]
    QualityText?: subCategoriesUpdateQualityTextInput | InputJsonValue[]
    QualityImages?: subCategoriesUpdateQualityImagesInput | InputJsonValue[]
    CustomHeading?: subCategoriesUpdateCustomHeadingInput | InputJsonValue[]
    CustomText?: subCategoriesUpdateCustomTextInput | InputJsonValue[]
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    bodyHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyMainHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductsCreateInput = {
    name: string
    price: number
    description: string
    stock: number
    discountPrice?: number | null
    posterImageUrl: JsonNullValueInput | InputJsonValue
    hoverImageUrl?: NullableJsonNullValueInput | InputJsonValue
    productImages?: ProductsCreateproductImagesInput | InputJsonValue[]
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    last_editedBy?: string | null
    custom_url: string
    breadCrum?: string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: string | null
    BannerHeading?: string | null
    categoryHeroImages?: ProductsCreatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: string | null
    categoryHeroHeading?: string | null
    categoryHeroText?: ProductsCreatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: ProductsCreatecategoryFaqsInput | InputJsonValue[]
    right_side_Heading?: string | null
    left_side_Text?: ProductsCreateleft_side_TextInput | InputJsonValue[]
    left_side_image?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: string | null
    bottomText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: string | null
    category?: categoriesCreateNestedOneWithoutProductsInput
    subcategory?: subCategoriesCreateNestedOneWithoutProductsInput
  }

  export type ProductsUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    description: string
    stock: number
    discountPrice?: number | null
    posterImageUrl: JsonNullValueInput | InputJsonValue
    hoverImageUrl?: NullableJsonNullValueInput | InputJsonValue
    productImages?: ProductsCreateproductImagesInput | InputJsonValue[]
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    last_editedBy?: string | null
    custom_url: string
    breadCrum?: string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: string | null
    BannerHeading?: string | null
    categoryHeroImages?: ProductsCreatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: string | null
    categoryHeroHeading?: string | null
    categoryHeroText?: ProductsCreatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: ProductsCreatecategoryFaqsInput | InputJsonValue[]
    right_side_Heading?: string | null
    left_side_Text?: ProductsCreateleft_side_TextInput | InputJsonValue[]
    left_side_image?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: string | null
    bottomText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    categoryId?: number | null
    subCategoryId?: number | null
    seoSchema?: string | null
  }

  export type ProductsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    discountPrice?: NullableIntFieldUpdateOperationsInput | number | null
    posterImageUrl?: JsonNullValueInput | InputJsonValue
    hoverImageUrl?: NullableJsonNullValueInput | InputJsonValue
    productImages?: ProductsUpdateproductImagesInput | InputJsonValue[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroImages?: ProductsUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: ProductsUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: ProductsUpdatecategoryFaqsInput | InputJsonValue[]
    right_side_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    left_side_Text?: ProductsUpdateleft_side_TextInput | InputJsonValue[]
    left_side_image?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
    category?: categoriesUpdateOneWithoutProductsNestedInput
    subcategory?: subCategoriesUpdateOneWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    discountPrice?: NullableIntFieldUpdateOperationsInput | number | null
    posterImageUrl?: JsonNullValueInput | InputJsonValue
    hoverImageUrl?: NullableJsonNullValueInput | InputJsonValue
    productImages?: ProductsUpdateproductImagesInput | InputJsonValue[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroImages?: ProductsUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: ProductsUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: ProductsUpdatecategoryFaqsInput | InputJsonValue[]
    right_side_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    left_side_Text?: ProductsUpdateleft_side_TextInput | InputJsonValue[]
    left_side_image?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    subCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductsCreateManyInput = {
    id?: number
    name: string
    price: number
    description: string
    stock: number
    discountPrice?: number | null
    posterImageUrl: JsonNullValueInput | InputJsonValue
    hoverImageUrl?: NullableJsonNullValueInput | InputJsonValue
    productImages?: ProductsCreateproductImagesInput | InputJsonValue[]
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    last_editedBy?: string | null
    custom_url: string
    breadCrum?: string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: string | null
    BannerHeading?: string | null
    categoryHeroImages?: ProductsCreatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: string | null
    categoryHeroHeading?: string | null
    categoryHeroText?: ProductsCreatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: ProductsCreatecategoryFaqsInput | InputJsonValue[]
    right_side_Heading?: string | null
    left_side_Text?: ProductsCreateleft_side_TextInput | InputJsonValue[]
    left_side_image?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: string | null
    bottomText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    categoryId?: number | null
    subCategoryId?: number | null
    seoSchema?: string | null
  }

  export type ProductsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    discountPrice?: NullableIntFieldUpdateOperationsInput | number | null
    posterImageUrl?: JsonNullValueInput | InputJsonValue
    hoverImageUrl?: NullableJsonNullValueInput | InputJsonValue
    productImages?: ProductsUpdateproductImagesInput | InputJsonValue[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroImages?: ProductsUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: ProductsUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: ProductsUpdatecategoryFaqsInput | InputJsonValue[]
    right_side_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    left_side_Text?: ProductsUpdateleft_side_TextInput | InputJsonValue[]
    left_side_image?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    discountPrice?: NullableIntFieldUpdateOperationsInput | number | null
    posterImageUrl?: JsonNullValueInput | InputJsonValue
    hoverImageUrl?: NullableJsonNullValueInput | InputJsonValue
    productImages?: ProductsUpdateproductImagesInput | InputJsonValue[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroImages?: ProductsUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: ProductsUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: ProductsUpdatecategoryFaqsInput | InputJsonValue[]
    right_side_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    left_side_Text?: ProductsUpdateleft_side_TextInput | InputJsonValue[]
    left_side_image?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    subCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type ReviewsCreateInput = {
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    name: string
    starRating?: number | null
    ReviewsDescription: string
    reviewDate?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ReviewsUncheckedCreateInput = {
    id?: number
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    name: string
    starRating?: number | null
    ReviewsDescription: string
    reviewDate?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ReviewsUpdateInput = {
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    name?: StringFieldUpdateOperationsInput | string
    starRating?: NullableIntFieldUpdateOperationsInput | number | null
    ReviewsDescription?: StringFieldUpdateOperationsInput | string
    reviewDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    name?: StringFieldUpdateOperationsInput | string
    starRating?: NullableIntFieldUpdateOperationsInput | number | null
    ReviewsDescription?: StringFieldUpdateOperationsInput | string
    reviewDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewsCreateManyInput = {
    id?: number
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    name: string
    starRating?: number | null
    ReviewsDescription: string
    reviewDate?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ReviewsUpdateManyMutationInput = {
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    name?: StringFieldUpdateOperationsInput | string
    starRating?: NullableIntFieldUpdateOperationsInput | number | null
    ReviewsDescription?: StringFieldUpdateOperationsInput | string
    reviewDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    name?: StringFieldUpdateOperationsInput | string
    starRating?: NullableIntFieldUpdateOperationsInput | number | null
    ReviewsDescription?: StringFieldUpdateOperationsInput | string
    reviewDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SocialLinksCreateInput = {
    posterImageUrl: JsonNullValueInput | InputJsonValue
    post_links: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type SocialLinksUncheckedCreateInput = {
    id?: number
    posterImageUrl: JsonNullValueInput | InputJsonValue
    post_links: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type SocialLinksUpdateInput = {
    posterImageUrl?: JsonNullValueInput | InputJsonValue
    post_links?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SocialLinksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    posterImageUrl?: JsonNullValueInput | InputJsonValue
    post_links?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SocialLinksCreateManyInput = {
    id?: number
    posterImageUrl: JsonNullValueInput | InputJsonValue
    post_links: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type SocialLinksUpdateManyMutationInput = {
    posterImageUrl?: JsonNullValueInput | InputJsonValue
    post_links?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SocialLinksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    posterImageUrl?: JsonNullValueInput | InputJsonValue
    post_links?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentsCreateInput = {
    name: string
    phoneNumber: number
    whatsApp?: number | null
    location: string
    email: string
    subCategories?: AppointmentsCreatesubCategoriesInput | InputJsonValue[]
  }

  export type AppointmentsUncheckedCreateInput = {
    id?: number
    name: string
    phoneNumber: number
    whatsApp?: number | null
    location: string
    email: string
    subCategories?: AppointmentsCreatesubCategoriesInput | InputJsonValue[]
  }

  export type AppointmentsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    whatsApp?: NullableIntFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subCategories?: AppointmentsUpdatesubCategoriesInput | InputJsonValue[]
  }

  export type AppointmentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    whatsApp?: NullableIntFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subCategories?: AppointmentsUpdatesubCategoriesInput | InputJsonValue[]
  }

  export type AppointmentsCreateManyInput = {
    id?: number
    name: string
    phoneNumber: number
    whatsApp?: number | null
    location: string
    email: string
    subCategories?: AppointmentsCreatesubCategoriesInput | InputJsonValue[]
  }

  export type AppointmentsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    whatsApp?: NullableIntFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subCategories?: AppointmentsUpdatesubCategoriesInput | InputJsonValue[]
  }

  export type AppointmentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    whatsApp?: NullableIntFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subCategories?: AppointmentsUpdatesubCategoriesInput | InputJsonValue[]
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

  export type SubCategoriesListRelationFilter = {
    every?: subCategoriesWhereInput
    some?: subCategoriesWhereInput
    none?: subCategoriesWhereInput
  }

  export type ProductsListRelationFilter = {
    every?: ProductsWhereInput
    some?: ProductsWhereInput
    none?: ProductsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type subCategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
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
    salesBannerImage?: SortOrder
    Product_Section_heading?: SortOrder
    bottomText?: SortOrder
    explore_Heading?: SortOrder
    explore_main_heading?: SortOrder
    explore_description?: SortOrder
    Canonical_Tag?: SortOrder
    Meta_Description?: SortOrder
    Meta_Title?: SortOrder
    seoSchema?: SortOrder
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
    seoSchema?: SortOrder
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
    seoSchema?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoriesNullableScalarRelationFilter = {
    is?: categoriesWhereInput | null
    isNot?: categoriesWhereInput | null
  }

  export type subCategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    posterImageUrl?: SortOrder
    last_editedBy?: SortOrder
    short_description?: SortOrder
    custom_url?: SortOrder
    categoryId?: SortOrder
    breadCrum?: SortOrder
    Banners?: SortOrder
    BannerText?: SortOrder
    BannerHeading?: SortOrder
    leftHeading?: SortOrder
    categoryText?: SortOrder
    categoryHeroImages?: SortOrder
    categoryHeroToptext?: SortOrder
    categoryHeroHeading?: SortOrder
    categoryHeroText?: SortOrder
    categoryFaqs?: SortOrder
    collectionHeading?: SortOrder
    collectionMainHeading?: SortOrder
    QualityHeadings?: SortOrder
    QualityText?: SortOrder
    QualityImages?: SortOrder
    CustomHeading?: SortOrder
    CustomText?: SortOrder
    Product_Section_heading?: SortOrder
    bottomText?: SortOrder
    bodyHeading?: SortOrder
    bodyMainHeading?: SortOrder
    bodyText?: SortOrder
    explore_Heading?: SortOrder
    explore_main_heading?: SortOrder
    explore_description?: SortOrder
    professionalServiceImage?: SortOrder
    Canonical_Tag?: SortOrder
    Meta_Description?: SortOrder
    Meta_Title?: SortOrder
    seoSchema?: SortOrder
  }

  export type subCategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type subCategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    last_editedBy?: SortOrder
    short_description?: SortOrder
    custom_url?: SortOrder
    categoryId?: SortOrder
    breadCrum?: SortOrder
    BannerText?: SortOrder
    BannerHeading?: SortOrder
    leftHeading?: SortOrder
    categoryHeroToptext?: SortOrder
    categoryHeroHeading?: SortOrder
    collectionHeading?: SortOrder
    collectionMainHeading?: SortOrder
    Product_Section_heading?: SortOrder
    bottomText?: SortOrder
    bodyHeading?: SortOrder
    bodyMainHeading?: SortOrder
    bodyText?: SortOrder
    explore_Heading?: SortOrder
    explore_main_heading?: SortOrder
    explore_description?: SortOrder
    Canonical_Tag?: SortOrder
    Meta_Description?: SortOrder
    Meta_Title?: SortOrder
    seoSchema?: SortOrder
  }

  export type subCategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    last_editedBy?: SortOrder
    short_description?: SortOrder
    custom_url?: SortOrder
    categoryId?: SortOrder
    breadCrum?: SortOrder
    BannerText?: SortOrder
    BannerHeading?: SortOrder
    leftHeading?: SortOrder
    categoryHeroToptext?: SortOrder
    categoryHeroHeading?: SortOrder
    collectionHeading?: SortOrder
    collectionMainHeading?: SortOrder
    Product_Section_heading?: SortOrder
    bottomText?: SortOrder
    bodyHeading?: SortOrder
    bodyMainHeading?: SortOrder
    bodyText?: SortOrder
    explore_Heading?: SortOrder
    explore_main_heading?: SortOrder
    explore_description?: SortOrder
    Canonical_Tag?: SortOrder
    Meta_Description?: SortOrder
    Meta_Title?: SortOrder
    seoSchema?: SortOrder
  }

  export type subCategoriesSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SubCategoriesNullableScalarRelationFilter = {
    is?: subCategoriesWhereInput | null
    isNot?: subCategoriesWhereInput | null
  }

  export type ProductsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    stock?: SortOrder
    discountPrice?: SortOrder
    posterImageUrl?: SortOrder
    hoverImageUrl?: SortOrder
    productImages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Canonical_Tag?: SortOrder
    Meta_Description?: SortOrder
    Meta_Title?: SortOrder
    last_editedBy?: SortOrder
    custom_url?: SortOrder
    breadCrum?: SortOrder
    Banners?: SortOrder
    BannerText?: SortOrder
    BannerHeading?: SortOrder
    categoryHeroImages?: SortOrder
    categoryHeroToptext?: SortOrder
    categoryHeroHeading?: SortOrder
    categoryHeroText?: SortOrder
    categoryFaqs?: SortOrder
    right_side_Heading?: SortOrder
    left_side_Text?: SortOrder
    left_side_image?: SortOrder
    Product_Section_heading?: SortOrder
    bottomText?: SortOrder
    explore_Heading?: SortOrder
    explore_main_heading?: SortOrder
    explore_description?: SortOrder
    professionalServiceImage?: SortOrder
    categoryId?: SortOrder
    subCategoryId?: SortOrder
    seoSchema?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    discountPrice?: SortOrder
    categoryId?: SortOrder
    subCategoryId?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    stock?: SortOrder
    discountPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Canonical_Tag?: SortOrder
    Meta_Description?: SortOrder
    Meta_Title?: SortOrder
    last_editedBy?: SortOrder
    custom_url?: SortOrder
    breadCrum?: SortOrder
    BannerText?: SortOrder
    BannerHeading?: SortOrder
    categoryHeroToptext?: SortOrder
    categoryHeroHeading?: SortOrder
    right_side_Heading?: SortOrder
    Product_Section_heading?: SortOrder
    bottomText?: SortOrder
    explore_Heading?: SortOrder
    explore_main_heading?: SortOrder
    explore_description?: SortOrder
    categoryId?: SortOrder
    subCategoryId?: SortOrder
    seoSchema?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    stock?: SortOrder
    discountPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Canonical_Tag?: SortOrder
    Meta_Description?: SortOrder
    Meta_Title?: SortOrder
    last_editedBy?: SortOrder
    custom_url?: SortOrder
    breadCrum?: SortOrder
    BannerText?: SortOrder
    BannerHeading?: SortOrder
    categoryHeroToptext?: SortOrder
    categoryHeroHeading?: SortOrder
    right_side_Heading?: SortOrder
    Product_Section_heading?: SortOrder
    bottomText?: SortOrder
    explore_Heading?: SortOrder
    explore_main_heading?: SortOrder
    explore_description?: SortOrder
    categoryId?: SortOrder
    subCategoryId?: SortOrder
    seoSchema?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    discountPrice?: SortOrder
    categoryId?: SortOrder
    subCategoryId?: SortOrder
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

  export type ReviewsCountOrderByAggregateInput = {
    id?: SortOrder
    posterImageUrl?: SortOrder
    name?: SortOrder
    starRating?: SortOrder
    ReviewsDescription?: SortOrder
    reviewDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    starRating?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    starRating?: SortOrder
    ReviewsDescription?: SortOrder
    reviewDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    starRating?: SortOrder
    ReviewsDescription?: SortOrder
    reviewDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    id?: SortOrder
    starRating?: SortOrder
  }

  export type SocialLinksCountOrderByAggregateInput = {
    id?: SortOrder
    posterImageUrl?: SortOrder
    post_links?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialLinksAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SocialLinksMaxOrderByAggregateInput = {
    id?: SortOrder
    post_links?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialLinksMinOrderByAggregateInput = {
    id?: SortOrder
    post_links?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialLinksSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AppointmentsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    whatsApp?: SortOrder
    location?: SortOrder
    email?: SortOrder
    subCategories?: SortOrder
  }

  export type AppointmentsAvgOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    whatsApp?: SortOrder
  }

  export type AppointmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    whatsApp?: SortOrder
    location?: SortOrder
    email?: SortOrder
  }

  export type AppointmentsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    whatsApp?: SortOrder
    location?: SortOrder
    email?: SortOrder
  }

  export type AppointmentsSumOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    whatsApp?: SortOrder
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

  export type subCategoriesCreateNestedManyWithoutCategoryInput = {
    create?: XOR<subCategoriesCreateWithoutCategoryInput, subCategoriesUncheckedCreateWithoutCategoryInput> | subCategoriesCreateWithoutCategoryInput[] | subCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: subCategoriesCreateOrConnectWithoutCategoryInput | subCategoriesCreateOrConnectWithoutCategoryInput[]
    createMany?: subCategoriesCreateManyCategoryInputEnvelope
    connect?: subCategoriesWhereUniqueInput | subCategoriesWhereUniqueInput[]
  }

  export type ProductsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type subCategoriesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<subCategoriesCreateWithoutCategoryInput, subCategoriesUncheckedCreateWithoutCategoryInput> | subCategoriesCreateWithoutCategoryInput[] | subCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: subCategoriesCreateOrConnectWithoutCategoryInput | subCategoriesCreateOrConnectWithoutCategoryInput[]
    createMany?: subCategoriesCreateManyCategoryInputEnvelope
    connect?: subCategoriesWhereUniqueInput | subCategoriesWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
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

  export type subCategoriesUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<subCategoriesCreateWithoutCategoryInput, subCategoriesUncheckedCreateWithoutCategoryInput> | subCategoriesCreateWithoutCategoryInput[] | subCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: subCategoriesCreateOrConnectWithoutCategoryInput | subCategoriesCreateOrConnectWithoutCategoryInput[]
    upsert?: subCategoriesUpsertWithWhereUniqueWithoutCategoryInput | subCategoriesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: subCategoriesCreateManyCategoryInputEnvelope
    set?: subCategoriesWhereUniqueInput | subCategoriesWhereUniqueInput[]
    disconnect?: subCategoriesWhereUniqueInput | subCategoriesWhereUniqueInput[]
    delete?: subCategoriesWhereUniqueInput | subCategoriesWhereUniqueInput[]
    connect?: subCategoriesWhereUniqueInput | subCategoriesWhereUniqueInput[]
    update?: subCategoriesUpdateWithWhereUniqueWithoutCategoryInput | subCategoriesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: subCategoriesUpdateManyWithWhereWithoutCategoryInput | subCategoriesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: subCategoriesScalarWhereInput | subCategoriesScalarWhereInput[]
  }

  export type ProductsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoryInput | ProductsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoryInput | ProductsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoryInput | ProductsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type subCategoriesUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<subCategoriesCreateWithoutCategoryInput, subCategoriesUncheckedCreateWithoutCategoryInput> | subCategoriesCreateWithoutCategoryInput[] | subCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: subCategoriesCreateOrConnectWithoutCategoryInput | subCategoriesCreateOrConnectWithoutCategoryInput[]
    upsert?: subCategoriesUpsertWithWhereUniqueWithoutCategoryInput | subCategoriesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: subCategoriesCreateManyCategoryInputEnvelope
    set?: subCategoriesWhereUniqueInput | subCategoriesWhereUniqueInput[]
    disconnect?: subCategoriesWhereUniqueInput | subCategoriesWhereUniqueInput[]
    delete?: subCategoriesWhereUniqueInput | subCategoriesWhereUniqueInput[]
    connect?: subCategoriesWhereUniqueInput | subCategoriesWhereUniqueInput[]
    update?: subCategoriesUpdateWithWhereUniqueWithoutCategoryInput | subCategoriesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: subCategoriesUpdateManyWithWhereWithoutCategoryInput | subCategoriesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: subCategoriesScalarWhereInput | subCategoriesScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoryInput | ProductsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoryInput | ProductsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoryInput | ProductsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type subCategoriesCreatecategoryTextInput = {
    set: InputJsonValue[]
  }

  export type subCategoriesCreatecategoryHeroImagesInput = {
    set: InputJsonValue[]
  }

  export type subCategoriesCreatecategoryHeroTextInput = {
    set: InputJsonValue[]
  }

  export type subCategoriesCreatecategoryFaqsInput = {
    set: InputJsonValue[]
  }

  export type subCategoriesCreateQualityHeadingsInput = {
    set: InputJsonValue[]
  }

  export type subCategoriesCreateQualityTextInput = {
    set: InputJsonValue[]
  }

  export type subCategoriesCreateQualityImagesInput = {
    set: InputJsonValue[]
  }

  export type subCategoriesCreateCustomHeadingInput = {
    set: InputJsonValue[]
  }

  export type subCategoriesCreateCustomTextInput = {
    set: InputJsonValue[]
  }

  export type categoriesCreateNestedOneWithoutSubCategoriesInput = {
    create?: XOR<categoriesCreateWithoutSubCategoriesInput, categoriesUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutSubCategoriesInput
    connect?: categoriesWhereUniqueInput
  }

  export type ProductsCreateNestedManyWithoutSubcategoryInput = {
    create?: XOR<ProductsCreateWithoutSubcategoryInput, ProductsUncheckedCreateWithoutSubcategoryInput> | ProductsCreateWithoutSubcategoryInput[] | ProductsUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSubcategoryInput | ProductsCreateOrConnectWithoutSubcategoryInput[]
    createMany?: ProductsCreateManySubcategoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutSubcategoryInput = {
    create?: XOR<ProductsCreateWithoutSubcategoryInput, ProductsUncheckedCreateWithoutSubcategoryInput> | ProductsCreateWithoutSubcategoryInput[] | ProductsUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSubcategoryInput | ProductsCreateOrConnectWithoutSubcategoryInput[]
    createMany?: ProductsCreateManySubcategoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type subCategoriesUpdatecategoryTextInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type subCategoriesUpdatecategoryHeroImagesInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type subCategoriesUpdatecategoryHeroTextInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type subCategoriesUpdatecategoryFaqsInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type subCategoriesUpdateQualityHeadingsInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type subCategoriesUpdateQualityTextInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type subCategoriesUpdateQualityImagesInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type subCategoriesUpdateCustomHeadingInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type subCategoriesUpdateCustomTextInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type categoriesUpdateOneWithoutSubCategoriesNestedInput = {
    create?: XOR<categoriesCreateWithoutSubCategoriesInput, categoriesUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutSubCategoriesInput
    upsert?: categoriesUpsertWithoutSubCategoriesInput
    disconnect?: categoriesWhereInput | boolean
    delete?: categoriesWhereInput | boolean
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutSubCategoriesInput, categoriesUpdateWithoutSubCategoriesInput>, categoriesUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type ProductsUpdateManyWithoutSubcategoryNestedInput = {
    create?: XOR<ProductsCreateWithoutSubcategoryInput, ProductsUncheckedCreateWithoutSubcategoryInput> | ProductsCreateWithoutSubcategoryInput[] | ProductsUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSubcategoryInput | ProductsCreateOrConnectWithoutSubcategoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutSubcategoryInput | ProductsUpsertWithWhereUniqueWithoutSubcategoryInput[]
    createMany?: ProductsCreateManySubcategoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutSubcategoryInput | ProductsUpdateWithWhereUniqueWithoutSubcategoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutSubcategoryInput | ProductsUpdateManyWithWhereWithoutSubcategoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductsUncheckedUpdateManyWithoutSubcategoryNestedInput = {
    create?: XOR<ProductsCreateWithoutSubcategoryInput, ProductsUncheckedCreateWithoutSubcategoryInput> | ProductsCreateWithoutSubcategoryInput[] | ProductsUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSubcategoryInput | ProductsCreateOrConnectWithoutSubcategoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutSubcategoryInput | ProductsUpsertWithWhereUniqueWithoutSubcategoryInput[]
    createMany?: ProductsCreateManySubcategoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutSubcategoryInput | ProductsUpdateWithWhereUniqueWithoutSubcategoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutSubcategoryInput | ProductsUpdateManyWithWhereWithoutSubcategoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsCreateproductImagesInput = {
    set: InputJsonValue[]
  }

  export type ProductsCreatecategoryHeroImagesInput = {
    set: InputJsonValue[]
  }

  export type ProductsCreatecategoryHeroTextInput = {
    set: InputJsonValue[]
  }

  export type ProductsCreatecategoryFaqsInput = {
    set: InputJsonValue[]
  }

  export type ProductsCreateleft_side_TextInput = {
    set: InputJsonValue[]
  }

  export type categoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    connect?: categoriesWhereUniqueInput
  }

  export type subCategoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<subCategoriesCreateWithoutProductsInput, subCategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: subCategoriesCreateOrConnectWithoutProductsInput
    connect?: subCategoriesWhereUniqueInput
  }

  export type ProductsUpdateproductImagesInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type ProductsUpdatecategoryHeroImagesInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type ProductsUpdatecategoryHeroTextInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type ProductsUpdatecategoryFaqsInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type ProductsUpdateleft_side_TextInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type categoriesUpdateOneWithoutProductsNestedInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    upsert?: categoriesUpsertWithoutProductsInput
    disconnect?: categoriesWhereInput | boolean
    delete?: categoriesWhereInput | boolean
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutProductsInput, categoriesUpdateWithoutProductsInput>, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type subCategoriesUpdateOneWithoutProductsNestedInput = {
    create?: XOR<subCategoriesCreateWithoutProductsInput, subCategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: subCategoriesCreateOrConnectWithoutProductsInput
    upsert?: subCategoriesUpsertWithoutProductsInput
    disconnect?: subCategoriesWhereInput | boolean
    delete?: subCategoriesWhereInput | boolean
    connect?: subCategoriesWhereUniqueInput
    update?: XOR<XOR<subCategoriesUpdateToOneWithWhereWithoutProductsInput, subCategoriesUpdateWithoutProductsInput>, subCategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AppointmentsCreatesubCategoriesInput = {
    set: InputJsonValue[]
  }

  export type AppointmentsUpdatesubCategoriesInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type subCategoriesCreateWithoutCategoryInput = {
    name: string
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    last_editedBy?: string | null
    short_description?: string | null
    custom_url: string
    breadCrum?: string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: string | null
    BannerHeading?: string | null
    leftHeading?: string | null
    categoryText?: subCategoriesCreatecategoryTextInput | InputJsonValue[]
    categoryHeroImages?: subCategoriesCreatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: string | null
    categoryHeroHeading?: string | null
    categoryHeroText?: subCategoriesCreatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: subCategoriesCreatecategoryFaqsInput | InputJsonValue[]
    collectionHeading?: string | null
    collectionMainHeading?: string | null
    QualityHeadings?: subCategoriesCreateQualityHeadingsInput | InputJsonValue[]
    QualityText?: subCategoriesCreateQualityTextInput | InputJsonValue[]
    QualityImages?: subCategoriesCreateQualityImagesInput | InputJsonValue[]
    CustomHeading?: subCategoriesCreateCustomHeadingInput | InputJsonValue[]
    CustomText?: subCategoriesCreateCustomTextInput | InputJsonValue[]
    Product_Section_heading?: string | null
    bottomText?: string | null
    bodyHeading?: string | null
    bodyMainHeading?: string | null
    bodyText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    seoSchema?: string | null
    products?: ProductsCreateNestedManyWithoutSubcategoryInput
  }

  export type subCategoriesUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    last_editedBy?: string | null
    short_description?: string | null
    custom_url: string
    breadCrum?: string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: string | null
    BannerHeading?: string | null
    leftHeading?: string | null
    categoryText?: subCategoriesCreatecategoryTextInput | InputJsonValue[]
    categoryHeroImages?: subCategoriesCreatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: string | null
    categoryHeroHeading?: string | null
    categoryHeroText?: subCategoriesCreatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: subCategoriesCreatecategoryFaqsInput | InputJsonValue[]
    collectionHeading?: string | null
    collectionMainHeading?: string | null
    QualityHeadings?: subCategoriesCreateQualityHeadingsInput | InputJsonValue[]
    QualityText?: subCategoriesCreateQualityTextInput | InputJsonValue[]
    QualityImages?: subCategoriesCreateQualityImagesInput | InputJsonValue[]
    CustomHeading?: subCategoriesCreateCustomHeadingInput | InputJsonValue[]
    CustomText?: subCategoriesCreateCustomTextInput | InputJsonValue[]
    Product_Section_heading?: string | null
    bottomText?: string | null
    bodyHeading?: string | null
    bodyMainHeading?: string | null
    bodyText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    seoSchema?: string | null
    products?: ProductsUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type subCategoriesCreateOrConnectWithoutCategoryInput = {
    where: subCategoriesWhereUniqueInput
    create: XOR<subCategoriesCreateWithoutCategoryInput, subCategoriesUncheckedCreateWithoutCategoryInput>
  }

  export type subCategoriesCreateManyCategoryInputEnvelope = {
    data: subCategoriesCreateManyCategoryInput | subCategoriesCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductsCreateWithoutCategoryInput = {
    name: string
    price: number
    description: string
    stock: number
    discountPrice?: number | null
    posterImageUrl: JsonNullValueInput | InputJsonValue
    hoverImageUrl?: NullableJsonNullValueInput | InputJsonValue
    productImages?: ProductsCreateproductImagesInput | InputJsonValue[]
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    last_editedBy?: string | null
    custom_url: string
    breadCrum?: string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: string | null
    BannerHeading?: string | null
    categoryHeroImages?: ProductsCreatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: string | null
    categoryHeroHeading?: string | null
    categoryHeroText?: ProductsCreatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: ProductsCreatecategoryFaqsInput | InputJsonValue[]
    right_side_Heading?: string | null
    left_side_Text?: ProductsCreateleft_side_TextInput | InputJsonValue[]
    left_side_image?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: string | null
    bottomText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: string | null
    subcategory?: subCategoriesCreateNestedOneWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    price: number
    description: string
    stock: number
    discountPrice?: number | null
    posterImageUrl: JsonNullValueInput | InputJsonValue
    hoverImageUrl?: NullableJsonNullValueInput | InputJsonValue
    productImages?: ProductsCreateproductImagesInput | InputJsonValue[]
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    last_editedBy?: string | null
    custom_url: string
    breadCrum?: string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: string | null
    BannerHeading?: string | null
    categoryHeroImages?: ProductsCreatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: string | null
    categoryHeroHeading?: string | null
    categoryHeroText?: ProductsCreatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: ProductsCreatecategoryFaqsInput | InputJsonValue[]
    right_side_Heading?: string | null
    left_side_Text?: ProductsCreateleft_side_TextInput | InputJsonValue[]
    left_side_image?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: string | null
    bottomText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    subCategoryId?: number | null
    seoSchema?: string | null
  }

  export type ProductsCreateOrConnectWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput>
  }

  export type ProductsCreateManyCategoryInputEnvelope = {
    data: ProductsCreateManyCategoryInput | ProductsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type subCategoriesUpsertWithWhereUniqueWithoutCategoryInput = {
    where: subCategoriesWhereUniqueInput
    update: XOR<subCategoriesUpdateWithoutCategoryInput, subCategoriesUncheckedUpdateWithoutCategoryInput>
    create: XOR<subCategoriesCreateWithoutCategoryInput, subCategoriesUncheckedCreateWithoutCategoryInput>
  }

  export type subCategoriesUpdateWithWhereUniqueWithoutCategoryInput = {
    where: subCategoriesWhereUniqueInput
    data: XOR<subCategoriesUpdateWithoutCategoryInput, subCategoriesUncheckedUpdateWithoutCategoryInput>
  }

  export type subCategoriesUpdateManyWithWhereWithoutCategoryInput = {
    where: subCategoriesScalarWhereInput
    data: XOR<subCategoriesUpdateManyMutationInput, subCategoriesUncheckedUpdateManyWithoutCategoryInput>
  }

  export type subCategoriesScalarWhereInput = {
    AND?: subCategoriesScalarWhereInput | subCategoriesScalarWhereInput[]
    OR?: subCategoriesScalarWhereInput[]
    NOT?: subCategoriesScalarWhereInput | subCategoriesScalarWhereInput[]
    id?: IntFilter<"subCategories"> | number
    name?: StringFilter<"subCategories"> | string
    description?: StringNullableFilter<"subCategories"> | string | null
    createdAt?: DateTimeNullableFilter<"subCategories"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"subCategories"> | Date | string | null
    posterImageUrl?: JsonNullableFilter<"subCategories">
    last_editedBy?: StringNullableFilter<"subCategories"> | string | null
    short_description?: StringNullableFilter<"subCategories"> | string | null
    custom_url?: StringFilter<"subCategories"> | string
    categoryId?: IntNullableFilter<"subCategories"> | number | null
    breadCrum?: StringNullableFilter<"subCategories"> | string | null
    Banners?: JsonNullableFilter<"subCategories">
    BannerText?: StringNullableFilter<"subCategories"> | string | null
    BannerHeading?: StringNullableFilter<"subCategories"> | string | null
    leftHeading?: StringNullableFilter<"subCategories"> | string | null
    categoryText?: JsonNullableListFilter<"subCategories">
    categoryHeroImages?: JsonNullableListFilter<"subCategories">
    categoryHeroToptext?: StringNullableFilter<"subCategories"> | string | null
    categoryHeroHeading?: StringNullableFilter<"subCategories"> | string | null
    categoryHeroText?: JsonNullableListFilter<"subCategories">
    categoryFaqs?: JsonNullableListFilter<"subCategories">
    collectionHeading?: StringNullableFilter<"subCategories"> | string | null
    collectionMainHeading?: StringNullableFilter<"subCategories"> | string | null
    QualityHeadings?: JsonNullableListFilter<"subCategories">
    QualityText?: JsonNullableListFilter<"subCategories">
    QualityImages?: JsonNullableListFilter<"subCategories">
    CustomHeading?: JsonNullableListFilter<"subCategories">
    CustomText?: JsonNullableListFilter<"subCategories">
    Product_Section_heading?: StringNullableFilter<"subCategories"> | string | null
    bottomText?: StringNullableFilter<"subCategories"> | string | null
    bodyHeading?: StringNullableFilter<"subCategories"> | string | null
    bodyMainHeading?: StringNullableFilter<"subCategories"> | string | null
    bodyText?: StringNullableFilter<"subCategories"> | string | null
    explore_Heading?: StringNullableFilter<"subCategories"> | string | null
    explore_main_heading?: StringNullableFilter<"subCategories"> | string | null
    explore_description?: StringNullableFilter<"subCategories"> | string | null
    professionalServiceImage?: JsonNullableFilter<"subCategories">
    Canonical_Tag?: StringNullableFilter<"subCategories"> | string | null
    Meta_Description?: StringNullableFilter<"subCategories"> | string | null
    Meta_Title?: StringNullableFilter<"subCategories"> | string | null
    seoSchema?: StringNullableFilter<"subCategories"> | string | null
  }

  export type ProductsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutCategoryInput, ProductsUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutCategoryInput, ProductsUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductsUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductsScalarWhereInput = {
    AND?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    OR?: ProductsScalarWhereInput[]
    NOT?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    id?: IntFilter<"Products"> | number
    name?: StringFilter<"Products"> | string
    price?: IntFilter<"Products"> | number
    description?: StringFilter<"Products"> | string
    stock?: IntFilter<"Products"> | number
    discountPrice?: IntNullableFilter<"Products"> | number | null
    posterImageUrl?: JsonFilter<"Products">
    hoverImageUrl?: JsonNullableFilter<"Products">
    productImages?: JsonNullableListFilter<"Products">
    createdAt?: DateTimeNullableFilter<"Products"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Products"> | Date | string | null
    Canonical_Tag?: StringNullableFilter<"Products"> | string | null
    Meta_Description?: StringNullableFilter<"Products"> | string | null
    Meta_Title?: StringNullableFilter<"Products"> | string | null
    last_editedBy?: StringNullableFilter<"Products"> | string | null
    custom_url?: StringFilter<"Products"> | string
    breadCrum?: StringNullableFilter<"Products"> | string | null
    Banners?: JsonNullableFilter<"Products">
    BannerText?: StringNullableFilter<"Products"> | string | null
    BannerHeading?: StringNullableFilter<"Products"> | string | null
    categoryHeroImages?: JsonNullableListFilter<"Products">
    categoryHeroToptext?: StringNullableFilter<"Products"> | string | null
    categoryHeroHeading?: StringNullableFilter<"Products"> | string | null
    categoryHeroText?: JsonNullableListFilter<"Products">
    categoryFaqs?: JsonNullableListFilter<"Products">
    right_side_Heading?: StringNullableFilter<"Products"> | string | null
    left_side_Text?: JsonNullableListFilter<"Products">
    left_side_image?: JsonNullableFilter<"Products">
    Product_Section_heading?: StringNullableFilter<"Products"> | string | null
    bottomText?: StringNullableFilter<"Products"> | string | null
    explore_Heading?: StringNullableFilter<"Products"> | string | null
    explore_main_heading?: StringNullableFilter<"Products"> | string | null
    explore_description?: StringNullableFilter<"Products"> | string | null
    professionalServiceImage?: JsonNullableFilter<"Products">
    categoryId?: IntNullableFilter<"Products"> | number | null
    subCategoryId?: IntNullableFilter<"Products"> | number | null
    seoSchema?: StringNullableFilter<"Products"> | string | null
  }

  export type categoriesCreateWithoutSubCategoriesInput = {
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
    salesBannerImage?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: string | null
    bottomText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    seoSchema?: string | null
    products?: ProductsCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUncheckedCreateWithoutSubCategoriesInput = {
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
    salesBannerImage?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: string | null
    bottomText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    seoSchema?: string | null
    products?: ProductsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoriesCreateOrConnectWithoutSubCategoriesInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutSubCategoriesInput, categoriesUncheckedCreateWithoutSubCategoriesInput>
  }

  export type ProductsCreateWithoutSubcategoryInput = {
    name: string
    price: number
    description: string
    stock: number
    discountPrice?: number | null
    posterImageUrl: JsonNullValueInput | InputJsonValue
    hoverImageUrl?: NullableJsonNullValueInput | InputJsonValue
    productImages?: ProductsCreateproductImagesInput | InputJsonValue[]
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    last_editedBy?: string | null
    custom_url: string
    breadCrum?: string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: string | null
    BannerHeading?: string | null
    categoryHeroImages?: ProductsCreatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: string | null
    categoryHeroHeading?: string | null
    categoryHeroText?: ProductsCreatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: ProductsCreatecategoryFaqsInput | InputJsonValue[]
    right_side_Heading?: string | null
    left_side_Text?: ProductsCreateleft_side_TextInput | InputJsonValue[]
    left_side_image?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: string | null
    bottomText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: string | null
    category?: categoriesCreateNestedOneWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutSubcategoryInput = {
    id?: number
    name: string
    price: number
    description: string
    stock: number
    discountPrice?: number | null
    posterImageUrl: JsonNullValueInput | InputJsonValue
    hoverImageUrl?: NullableJsonNullValueInput | InputJsonValue
    productImages?: ProductsCreateproductImagesInput | InputJsonValue[]
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    last_editedBy?: string | null
    custom_url: string
    breadCrum?: string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: string | null
    BannerHeading?: string | null
    categoryHeroImages?: ProductsCreatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: string | null
    categoryHeroHeading?: string | null
    categoryHeroText?: ProductsCreatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: ProductsCreatecategoryFaqsInput | InputJsonValue[]
    right_side_Heading?: string | null
    left_side_Text?: ProductsCreateleft_side_TextInput | InputJsonValue[]
    left_side_image?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: string | null
    bottomText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    categoryId?: number | null
    seoSchema?: string | null
  }

  export type ProductsCreateOrConnectWithoutSubcategoryInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutSubcategoryInput, ProductsUncheckedCreateWithoutSubcategoryInput>
  }

  export type ProductsCreateManySubcategoryInputEnvelope = {
    data: ProductsCreateManySubcategoryInput | ProductsCreateManySubcategoryInput[]
    skipDuplicates?: boolean
  }

  export type categoriesUpsertWithoutSubCategoriesInput = {
    update: XOR<categoriesUpdateWithoutSubCategoriesInput, categoriesUncheckedUpdateWithoutSubCategoriesInput>
    create: XOR<categoriesCreateWithoutSubCategoriesInput, categoriesUncheckedCreateWithoutSubCategoriesInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutSubCategoriesInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutSubCategoriesInput, categoriesUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type categoriesUpdateWithoutSubCategoriesInput = {
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
    salesBannerImage?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductsUpdateManyWithoutCategoryNestedInput
  }

  export type categoriesUncheckedUpdateWithoutSubCategoriesInput = {
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
    salesBannerImage?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ProductsUpsertWithWhereUniqueWithoutSubcategoryInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutSubcategoryInput, ProductsUncheckedUpdateWithoutSubcategoryInput>
    create: XOR<ProductsCreateWithoutSubcategoryInput, ProductsUncheckedCreateWithoutSubcategoryInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutSubcategoryInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutSubcategoryInput, ProductsUncheckedUpdateWithoutSubcategoryInput>
  }

  export type ProductsUpdateManyWithWhereWithoutSubcategoryInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutSubcategoryInput>
  }

  export type categoriesCreateWithoutProductsInput = {
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
    salesBannerImage?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: string | null
    bottomText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    seoSchema?: string | null
    subCategories?: subCategoriesCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUncheckedCreateWithoutProductsInput = {
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
    salesBannerImage?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: string | null
    bottomText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    seoSchema?: string | null
    subCategories?: subCategoriesUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoriesCreateOrConnectWithoutProductsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
  }

  export type subCategoriesCreateWithoutProductsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    last_editedBy?: string | null
    short_description?: string | null
    custom_url: string
    breadCrum?: string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: string | null
    BannerHeading?: string | null
    leftHeading?: string | null
    categoryText?: subCategoriesCreatecategoryTextInput | InputJsonValue[]
    categoryHeroImages?: subCategoriesCreatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: string | null
    categoryHeroHeading?: string | null
    categoryHeroText?: subCategoriesCreatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: subCategoriesCreatecategoryFaqsInput | InputJsonValue[]
    collectionHeading?: string | null
    collectionMainHeading?: string | null
    QualityHeadings?: subCategoriesCreateQualityHeadingsInput | InputJsonValue[]
    QualityText?: subCategoriesCreateQualityTextInput | InputJsonValue[]
    QualityImages?: subCategoriesCreateQualityImagesInput | InputJsonValue[]
    CustomHeading?: subCategoriesCreateCustomHeadingInput | InputJsonValue[]
    CustomText?: subCategoriesCreateCustomTextInput | InputJsonValue[]
    Product_Section_heading?: string | null
    bottomText?: string | null
    bodyHeading?: string | null
    bodyMainHeading?: string | null
    bodyText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    seoSchema?: string | null
    category?: categoriesCreateNestedOneWithoutSubCategoriesInput
  }

  export type subCategoriesUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    last_editedBy?: string | null
    short_description?: string | null
    custom_url: string
    categoryId?: number | null
    breadCrum?: string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: string | null
    BannerHeading?: string | null
    leftHeading?: string | null
    categoryText?: subCategoriesCreatecategoryTextInput | InputJsonValue[]
    categoryHeroImages?: subCategoriesCreatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: string | null
    categoryHeroHeading?: string | null
    categoryHeroText?: subCategoriesCreatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: subCategoriesCreatecategoryFaqsInput | InputJsonValue[]
    collectionHeading?: string | null
    collectionMainHeading?: string | null
    QualityHeadings?: subCategoriesCreateQualityHeadingsInput | InputJsonValue[]
    QualityText?: subCategoriesCreateQualityTextInput | InputJsonValue[]
    QualityImages?: subCategoriesCreateQualityImagesInput | InputJsonValue[]
    CustomHeading?: subCategoriesCreateCustomHeadingInput | InputJsonValue[]
    CustomText?: subCategoriesCreateCustomTextInput | InputJsonValue[]
    Product_Section_heading?: string | null
    bottomText?: string | null
    bodyHeading?: string | null
    bodyMainHeading?: string | null
    bodyText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    seoSchema?: string | null
  }

  export type subCategoriesCreateOrConnectWithoutProductsInput = {
    where: subCategoriesWhereUniqueInput
    create: XOR<subCategoriesCreateWithoutProductsInput, subCategoriesUncheckedCreateWithoutProductsInput>
  }

  export type categoriesUpsertWithoutProductsInput = {
    update: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type categoriesUpdateWithoutProductsInput = {
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
    salesBannerImage?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
    subCategories?: subCategoriesUpdateManyWithoutCategoryNestedInput
  }

  export type categoriesUncheckedUpdateWithoutProductsInput = {
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
    salesBannerImage?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
    subCategories?: subCategoriesUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type subCategoriesUpsertWithoutProductsInput = {
    update: XOR<subCategoriesUpdateWithoutProductsInput, subCategoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<subCategoriesCreateWithoutProductsInput, subCategoriesUncheckedCreateWithoutProductsInput>
    where?: subCategoriesWhereInput
  }

  export type subCategoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: subCategoriesWhereInput
    data: XOR<subCategoriesUpdateWithoutProductsInput, subCategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type subCategoriesUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    leftHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryText?: subCategoriesUpdatecategoryTextInput | InputJsonValue[]
    categoryHeroImages?: subCategoriesUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: subCategoriesUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: subCategoriesUpdatecategoryFaqsInput | InputJsonValue[]
    collectionHeading?: NullableStringFieldUpdateOperationsInput | string | null
    collectionMainHeading?: NullableStringFieldUpdateOperationsInput | string | null
    QualityHeadings?: subCategoriesUpdateQualityHeadingsInput | InputJsonValue[]
    QualityText?: subCategoriesUpdateQualityTextInput | InputJsonValue[]
    QualityImages?: subCategoriesUpdateQualityImagesInput | InputJsonValue[]
    CustomHeading?: subCategoriesUpdateCustomHeadingInput | InputJsonValue[]
    CustomText?: subCategoriesUpdateCustomTextInput | InputJsonValue[]
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    bodyHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyMainHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
    category?: categoriesUpdateOneWithoutSubCategoriesNestedInput
  }

  export type subCategoriesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    leftHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryText?: subCategoriesUpdatecategoryTextInput | InputJsonValue[]
    categoryHeroImages?: subCategoriesUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: subCategoriesUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: subCategoriesUpdatecategoryFaqsInput | InputJsonValue[]
    collectionHeading?: NullableStringFieldUpdateOperationsInput | string | null
    collectionMainHeading?: NullableStringFieldUpdateOperationsInput | string | null
    QualityHeadings?: subCategoriesUpdateQualityHeadingsInput | InputJsonValue[]
    QualityText?: subCategoriesUpdateQualityTextInput | InputJsonValue[]
    QualityImages?: subCategoriesUpdateQualityImagesInput | InputJsonValue[]
    CustomHeading?: subCategoriesUpdateCustomHeadingInput | InputJsonValue[]
    CustomText?: subCategoriesUpdateCustomTextInput | InputJsonValue[]
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    bodyHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyMainHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type subCategoriesCreateManyCategoryInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    last_editedBy?: string | null
    short_description?: string | null
    custom_url: string
    breadCrum?: string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: string | null
    BannerHeading?: string | null
    leftHeading?: string | null
    categoryText?: subCategoriesCreatecategoryTextInput | InputJsonValue[]
    categoryHeroImages?: subCategoriesCreatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: string | null
    categoryHeroHeading?: string | null
    categoryHeroText?: subCategoriesCreatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: subCategoriesCreatecategoryFaqsInput | InputJsonValue[]
    collectionHeading?: string | null
    collectionMainHeading?: string | null
    QualityHeadings?: subCategoriesCreateQualityHeadingsInput | InputJsonValue[]
    QualityText?: subCategoriesCreateQualityTextInput | InputJsonValue[]
    QualityImages?: subCategoriesCreateQualityImagesInput | InputJsonValue[]
    CustomHeading?: subCategoriesCreateCustomHeadingInput | InputJsonValue[]
    CustomText?: subCategoriesCreateCustomTextInput | InputJsonValue[]
    Product_Section_heading?: string | null
    bottomText?: string | null
    bodyHeading?: string | null
    bodyMainHeading?: string | null
    bodyText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    seoSchema?: string | null
  }

  export type ProductsCreateManyCategoryInput = {
    id?: number
    name: string
    price: number
    description: string
    stock: number
    discountPrice?: number | null
    posterImageUrl: JsonNullValueInput | InputJsonValue
    hoverImageUrl?: NullableJsonNullValueInput | InputJsonValue
    productImages?: ProductsCreateproductImagesInput | InputJsonValue[]
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    last_editedBy?: string | null
    custom_url: string
    breadCrum?: string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: string | null
    BannerHeading?: string | null
    categoryHeroImages?: ProductsCreatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: string | null
    categoryHeroHeading?: string | null
    categoryHeroText?: ProductsCreatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: ProductsCreatecategoryFaqsInput | InputJsonValue[]
    right_side_Heading?: string | null
    left_side_Text?: ProductsCreateleft_side_TextInput | InputJsonValue[]
    left_side_image?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: string | null
    bottomText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    subCategoryId?: number | null
    seoSchema?: string | null
  }

  export type subCategoriesUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    leftHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryText?: subCategoriesUpdatecategoryTextInput | InputJsonValue[]
    categoryHeroImages?: subCategoriesUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: subCategoriesUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: subCategoriesUpdatecategoryFaqsInput | InputJsonValue[]
    collectionHeading?: NullableStringFieldUpdateOperationsInput | string | null
    collectionMainHeading?: NullableStringFieldUpdateOperationsInput | string | null
    QualityHeadings?: subCategoriesUpdateQualityHeadingsInput | InputJsonValue[]
    QualityText?: subCategoriesUpdateQualityTextInput | InputJsonValue[]
    QualityImages?: subCategoriesUpdateQualityImagesInput | InputJsonValue[]
    CustomHeading?: subCategoriesUpdateCustomHeadingInput | InputJsonValue[]
    CustomText?: subCategoriesUpdateCustomTextInput | InputJsonValue[]
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    bodyHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyMainHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductsUpdateManyWithoutSubcategoryNestedInput
  }

  export type subCategoriesUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    leftHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryText?: subCategoriesUpdatecategoryTextInput | InputJsonValue[]
    categoryHeroImages?: subCategoriesUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: subCategoriesUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: subCategoriesUpdatecategoryFaqsInput | InputJsonValue[]
    collectionHeading?: NullableStringFieldUpdateOperationsInput | string | null
    collectionMainHeading?: NullableStringFieldUpdateOperationsInput | string | null
    QualityHeadings?: subCategoriesUpdateQualityHeadingsInput | InputJsonValue[]
    QualityText?: subCategoriesUpdateQualityTextInput | InputJsonValue[]
    QualityImages?: subCategoriesUpdateQualityImagesInput | InputJsonValue[]
    CustomHeading?: subCategoriesUpdateCustomHeadingInput | InputJsonValue[]
    CustomText?: subCategoriesUpdateCustomTextInput | InputJsonValue[]
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    bodyHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyMainHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductsUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type subCategoriesUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posterImageUrl?: NullableJsonNullValueInput | InputJsonValue
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    leftHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryText?: subCategoriesUpdatecategoryTextInput | InputJsonValue[]
    categoryHeroImages?: subCategoriesUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: subCategoriesUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: subCategoriesUpdatecategoryFaqsInput | InputJsonValue[]
    collectionHeading?: NullableStringFieldUpdateOperationsInput | string | null
    collectionMainHeading?: NullableStringFieldUpdateOperationsInput | string | null
    QualityHeadings?: subCategoriesUpdateQualityHeadingsInput | InputJsonValue[]
    QualityText?: subCategoriesUpdateQualityTextInput | InputJsonValue[]
    QualityImages?: subCategoriesUpdateQualityImagesInput | InputJsonValue[]
    CustomHeading?: subCategoriesUpdateCustomHeadingInput | InputJsonValue[]
    CustomText?: subCategoriesUpdateCustomTextInput | InputJsonValue[]
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    bodyHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyMainHeading?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductsUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    discountPrice?: NullableIntFieldUpdateOperationsInput | number | null
    posterImageUrl?: JsonNullValueInput | InputJsonValue
    hoverImageUrl?: NullableJsonNullValueInput | InputJsonValue
    productImages?: ProductsUpdateproductImagesInput | InputJsonValue[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroImages?: ProductsUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: ProductsUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: ProductsUpdatecategoryFaqsInput | InputJsonValue[]
    right_side_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    left_side_Text?: ProductsUpdateleft_side_TextInput | InputJsonValue[]
    left_side_image?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: subCategoriesUpdateOneWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    discountPrice?: NullableIntFieldUpdateOperationsInput | number | null
    posterImageUrl?: JsonNullValueInput | InputJsonValue
    hoverImageUrl?: NullableJsonNullValueInput | InputJsonValue
    productImages?: ProductsUpdateproductImagesInput | InputJsonValue[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroImages?: ProductsUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: ProductsUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: ProductsUpdatecategoryFaqsInput | InputJsonValue[]
    right_side_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    left_side_Text?: ProductsUpdateleft_side_TextInput | InputJsonValue[]
    left_side_image?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    subCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductsUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    discountPrice?: NullableIntFieldUpdateOperationsInput | number | null
    posterImageUrl?: JsonNullValueInput | InputJsonValue
    hoverImageUrl?: NullableJsonNullValueInput | InputJsonValue
    productImages?: ProductsUpdateproductImagesInput | InputJsonValue[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroImages?: ProductsUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: ProductsUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: ProductsUpdatecategoryFaqsInput | InputJsonValue[]
    right_side_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    left_side_Text?: ProductsUpdateleft_side_TextInput | InputJsonValue[]
    left_side_image?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    subCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductsCreateManySubcategoryInput = {
    id?: number
    name: string
    price: number
    description: string
    stock: number
    discountPrice?: number | null
    posterImageUrl: JsonNullValueInput | InputJsonValue
    hoverImageUrl?: NullableJsonNullValueInput | InputJsonValue
    productImages?: ProductsCreateproductImagesInput | InputJsonValue[]
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Canonical_Tag?: string | null
    Meta_Description?: string | null
    Meta_Title?: string | null
    last_editedBy?: string | null
    custom_url: string
    breadCrum?: string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: string | null
    BannerHeading?: string | null
    categoryHeroImages?: ProductsCreatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: string | null
    categoryHeroHeading?: string | null
    categoryHeroText?: ProductsCreatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: ProductsCreatecategoryFaqsInput | InputJsonValue[]
    right_side_Heading?: string | null
    left_side_Text?: ProductsCreateleft_side_TextInput | InputJsonValue[]
    left_side_image?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: string | null
    bottomText?: string | null
    explore_Heading?: string | null
    explore_main_heading?: string | null
    explore_description?: string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    categoryId?: number | null
    seoSchema?: string | null
  }

  export type ProductsUpdateWithoutSubcategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    discountPrice?: NullableIntFieldUpdateOperationsInput | number | null
    posterImageUrl?: JsonNullValueInput | InputJsonValue
    hoverImageUrl?: NullableJsonNullValueInput | InputJsonValue
    productImages?: ProductsUpdateproductImagesInput | InputJsonValue[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroImages?: ProductsUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: ProductsUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: ProductsUpdatecategoryFaqsInput | InputJsonValue[]
    right_side_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    left_side_Text?: ProductsUpdateleft_side_TextInput | InputJsonValue[]
    left_side_image?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
    category?: categoriesUpdateOneWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutSubcategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    discountPrice?: NullableIntFieldUpdateOperationsInput | number | null
    posterImageUrl?: JsonNullValueInput | InputJsonValue
    hoverImageUrl?: NullableJsonNullValueInput | InputJsonValue
    productImages?: ProductsUpdateproductImagesInput | InputJsonValue[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroImages?: ProductsUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: ProductsUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: ProductsUpdatecategoryFaqsInput | InputJsonValue[]
    right_side_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    left_side_Text?: ProductsUpdateleft_side_TextInput | InputJsonValue[]
    left_side_image?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductsUncheckedUpdateManyWithoutSubcategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    discountPrice?: NullableIntFieldUpdateOperationsInput | number | null
    posterImageUrl?: JsonNullValueInput | InputJsonValue
    hoverImageUrl?: NullableJsonNullValueInput | InputJsonValue
    productImages?: ProductsUpdateproductImagesInput | InputJsonValue[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Canonical_Tag?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Description?: NullableStringFieldUpdateOperationsInput | string | null
    Meta_Title?: NullableStringFieldUpdateOperationsInput | string | null
    last_editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: StringFieldUpdateOperationsInput | string
    breadCrum?: NullableStringFieldUpdateOperationsInput | string | null
    Banners?: NullableJsonNullValueInput | InputJsonValue
    BannerText?: NullableStringFieldUpdateOperationsInput | string | null
    BannerHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroImages?: ProductsUpdatecategoryHeroImagesInput | InputJsonValue[]
    categoryHeroToptext?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroHeading?: NullableStringFieldUpdateOperationsInput | string | null
    categoryHeroText?: ProductsUpdatecategoryHeroTextInput | InputJsonValue[]
    categoryFaqs?: ProductsUpdatecategoryFaqsInput | InputJsonValue[]
    right_side_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    left_side_Text?: ProductsUpdateleft_side_TextInput | InputJsonValue[]
    left_side_image?: NullableJsonNullValueInput | InputJsonValue
    Product_Section_heading?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    explore_Heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_main_heading?: NullableStringFieldUpdateOperationsInput | string | null
    explore_description?: NullableStringFieldUpdateOperationsInput | string | null
    professionalServiceImage?: NullableJsonNullValueInput | InputJsonValue
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    seoSchema?: NullableStringFieldUpdateOperationsInput | string | null
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