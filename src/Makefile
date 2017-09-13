SRC:=$(wildcard *.svg)
OUTS:=$(SRC:%.svg:out/%.html)
all: $(OUTS)

out/%.html: %.svg make.sh
	make.sh $^ out
