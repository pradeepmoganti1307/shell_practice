1.FInd out who has the most number of commits ?
sort -t',' -k2 all_commits.csv | cut -d',' -f2 | uniq -c | sort -n

2.How many different days did the commits happen on? Which day had the most number of commits ?
cut -d',' -f3 all_commits.csv | cut -c9-10 | sort -n | uniq -c |sort -n

3.Which hour of which day saw the most number of commits?  
cut -d',' -f3 all_commits.csv| cut -c9-13 | sort -nk1,2 | uniq -c | sort -nk1 | tail -n1
