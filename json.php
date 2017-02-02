<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Request-Origin, Access-Control-Request-Methods");
header("Access-Control-Allow-Methods: GET, POST");

$go = '[
    {
	"gtin": "09909090909",
	"name": "Воздушная подушка",
	"subcat": "Автомобильные товары",
	"price": "88.00",
	"date": "17.12.2016",
	"delivery": "да",
	"futures": "нет"
}, 
{
	"gtin": "245222233",
	"name": "Торт - \'Тайна бархатной ночи\', фигурный,весовой",
	"subcat": "Торты",
	"price": "12.00",
	"date": "22.11.2016",
	"delivery": "нет",
	"futures": "нет"
}, {
	"gtin": "34343434",
	"name": "Торт - \'Тайна бархатной ночи\', фигурный,весовой ",
	"subcat": "Торты",
	"price": "36.00",
	"date": "11.10.2016",
	"delivery": "да",
	"futures": "нет"
}, {
	"gtin": "22544423",
	"name": "Торт - \'Тайна бархатной ночи\', фигурный,весовой ",
	"subcat": "Торты",
	"price": "11.00",
	"date": "04.09.2016",
	"delivery": "да",
	"futures": "да"
}, {
	"gtin": "444444422",
	"name": "Чай зеленый - \'Greenfield Flying Dragon\'",
	"subcat": "Чай зеленый",
	"price": "5.00",
	"date": "07.08.2016",
	"delivery": "да",
	"futures": "нет"
}]';

echo $go;
?>