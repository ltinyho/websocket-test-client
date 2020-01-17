IMAGE = registry.cn-shanghai.aliyuncs.com/ltinyho-web/websocket-test-client
BUILD_TIME =$(shell `echo date +'%Y%m%d%H%M%S'`)
NEW_IMAGE = $(IMAGE):v$(BUILD_TIME)
KUBECONFIG= ~/.kube/lt
.PHONY: deploy
deploy:
	npm run build
	docker-compose build
	docker tag $(IMAGE):latest $(NEW_IMAGE)
	docker push $(NEW_IMAGE)
	KUBECONFIG=$(KUBECONFIG) kubectl -n lt-web set image deployment/websocket-test-client websocket-test-client=$(NEW_IMAGE)
