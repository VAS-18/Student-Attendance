import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});


export const STUDENTS = pgTable("students", {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  name: varchar('name',{ length: 255 }).notNull(),
  rollno: integer('rno').notNull().unique(),
  branch:varchar('branch',{length: 255 }).notNull()
});


export const BRANCH = pgTable("Branch",{
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  branchname: varchar('branchname',{length: 255 }).notNull()
});

export const Internal = pgTable("Branch",{
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  subject: varchar('branchname',{length: 255 }).notNull(),

});