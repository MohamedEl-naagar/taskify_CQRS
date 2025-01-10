# Run Prisma with Express
npx prisma init --datasource-provider postgresql

=> You will see the folder `prisma` and in it the file `schema.prisma` containing your models.

# The First Model or Collection 
model {}

# Prisma Migration
Now that the code is in the schema, we need to put it in the database. We will write some commands to generate and apply the migration.

```sh
npx prisma generate
npx prisma migrate dev --name init --create-only
# When prompted, type 'y' to confirm
npx prisma migrate deploy
``` 