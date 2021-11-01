/**
  Предположим базу данных
  таблицы :
  authors
  books
  students
  numberOfCopies

    sql запрос который возвращает самого популярного
                автора за год.

  будем считать что самый популярный автор это тот у кого осталось
        наименьшее колиичество копий
 */
 select authors.name  from authors,books
            where books.id == numberOfCopies.id
                and numberOfCopies.Available < numberOfCopies.Total
