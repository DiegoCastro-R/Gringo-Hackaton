COMPOSE = docker-compose.yml
IMAGES = $(docker ps -qa)
VOLUMES = $(addprefix $(PWD), /volumes/truffle /volumes/ganache)

all: build up

build:
	mkdir -p $(VOLUMES)
	docker-compose -f $(COMPOSE) build

up:
	docker-compose -f $(COMPOSE) up -d

down:
	docker-compose -f $(COMPOSE) down

clean:
	docker-compose -f $(COMPOSE) down --rmi all

fclean: clean
	rm -rf $(VOLUMES)
	docker system prune --all -f

re: fclean all

.PHONY: all build up down fclean