// Regex para validar código NOSQL (e.g., $where, $gt, $lt, $or)
export const noSQLIPattern = /(\$where|\$gt|\$lt|\$or|\\u0024(where|gt|lt|or))/i;