-- drop table if exists areacoderank;
-- create temporary table areacoderank as (
-- select
-- areacode,
-- state,
-- city,
-- lat,
-- lon,
-- (
-- case
-- when @curType = areacode
-- then @curRow := @curRow + 1
-- else @curRow := 1 and @curType := areacode
-- end
-- ) rank
-- from goodareacodes a,
-- (select @curRow := 0, @curType := '') r
-- order by areacode,city
-- );

drop table if exists areacodestats;
create temporary table if not exists areacodestats as (
select 
  substring(phone,1,3) as areacode,
  count(*) as count
from records
group by areacode
);

drop table if exists jscode;
create temporary table if not exists jscode as (
select
  r.areacode,
  r.state,
  r.city,
  r.lat,
  r.lon,
  s.count,
  CONCAT('{lat: ',r.lat,', lng: ',r.lon,', count: ',s.count,'}') as json
from goodareacodes r
	inner join areacodestats s
		on s.areacode = r.areacode
order by s.count desc
);

select
	concat('[',group_concat(json separator ', '),']') as code
from jscode;