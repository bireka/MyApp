# -*- coding: utf-8 -*-

import sqlite3
import sys


def validate_db(db):
	conn = sqlite3.connect(db)
	c = conn.cursor()	

	c.execute('SELECT * FROM places')

	rows = c.fetchall()
	for row in rows:
		print row

	conn.close()


if __name__ == '__main__':
	db = sys.argv[1]
	
	validate_db(db)
	print '[INFO] Database ' + db + ' passed validation'


