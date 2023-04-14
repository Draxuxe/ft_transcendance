VOLUME_PATH	=	./src/.volumes
COMPOSE 	=	docker compose -f ./src/Docker-compose.yml

# Recipe
################################
start:
	$(COMPOSE) up -d

stop:
	$(COMPOSE) down

build:
	$(COMPOSE) build --no-cache

clean:
	$(COMPOSE) down --volumes
	rm -rf $(VOLUME_PATH)

fclean :
	@docker stop ft_transcendance-api-1
	@docker stop ft_transcendance-client-1
	@docker stop ft_transcendance-pgadmin-1
	@docker stop ft_transcendance-postgres-1
	@docker rm ft_transcendance-api-1
	@docker rm ft_transcendance-client-1
	@docker rm ft_transcendance-pgadmin-1
	@docker rm ft_transcendance-postgres-1
	@docker rmi ft_transcendance-api
	@docker rmi ft_transcendance-client
	@docker rmi postgres
	@docker volume rm ft_transcendance_postgres
	@docker volume rm ft_transcendance_pgadmin
	@docker network rm ft_transcendance_transcend
	@docker system prune -f
	@rm -rf $(VOLUME_PATH)/postgres
	@rm -rf $(VOLUME_PATH)/pgadmin
	@rm -rf $(VOLUME_PATH)

restart: stop clean build start

show:
	$(COMPOSE) ps

# ===============================================

create_dir:
	mkdir -p $(VOLUME_PATH)/postgres
	mkdir -p $(VOLUME_PATH)/pgadmin

.PHONY: start stop show build clean restart reset create_dir