# -*- coding: utf-8 -*-

import sqlite3
import json
import sys

#print json.dumps(
#{'stocks': 
#	{'colnames': ('date', 'trans', 'symbol', 'qty', 'price'), 
#	'coltypes': ('text', 'text', 'text', 'real', 'real'), 
#	'values': (( '2006-03-28', 'BUY', 'IBM', 1000, 45.00),
#				('2006-04-05', 'BUY', 'MSFT', 1000, 72.00),
#				('2006-04-06', 'SELL', 'IBM', 500, 53.00))}}, 
#sort_keys=True, indent=4, separators=(',', ': '))


def parse_json(filename):
	with open(filename) as f:   
		data = f.read()
	return json.loads(data) 	


def load_data_to_db(db, data):
	data = parse_json(data)
	conn = sqlite3.connect(db)
	c = conn.cursor()
	for tblname in data.keys():
		c.execute('DROP TABLE IF EXISTS ' + tblname)

		colnames = data[tblname]['colnames']
		coltypes = data[tblname]['coltypes']

		cols_info = []
		for i in range(len(colnames)):
			cols_info.append(colnames[i] + ' ' + coltypes[i])

		cols_info_joined = ', '.join(cols_info)
		c.execute('CREATE TABLE ' + tblname + ' (' + cols_info_joined + ')')

		purchases = data[tblname]['values']
		x = ['?' for i in range(len(colnames)-1)]
		c.executemany('INSERT INTO ' + tblname + ' (' + ','.join(colnames[1:]) + ') VALUES (' + ','.join(x) + ')', purchases)

		conn.commit()
		conn.close()


if __name__ == '__main__':
	db = sys.argv[1]
	data = sys.argv[2]

	load_data_to_db(db, data)
	print '[INFO] Data succesfully loaded to ' + db + ' database'


