declare class Database {
    private db;
    run: (sql: string, params?: any[]) => Promise<any>;
    get: (sql: string, params?: any[]) => Promise<any>;
    all: (sql: string, params?: any[]) => Promise<any[]>;
    constructor();
    initialize(): Promise<void>;
    private createTables;
    private insertSampleData;
    close(): Promise<void>;
}
export declare const database: Database;
export {};
//# sourceMappingURL=sqlite-database.d.ts.map