#!/bin/sh
psql -f ./enable_uuid.sql -U $1 -d $2 -h $3