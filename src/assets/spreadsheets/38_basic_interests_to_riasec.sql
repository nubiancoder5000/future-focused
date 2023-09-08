CREATE TABLE basic_interests_to_riasec (
  basic_interests_element_id CHARACTER VARYING(20) NOT NULL,
  riasec_element_id CHARACTER VARYING(20) NOT NULL,
  FOREIGN KEY (basic_interests_element_id) REFERENCES content_model_reference(element_id),
  FOREIGN KEY (riasec_element_id) REFERENCES content_model_reference(element_id));
GO

INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.a', '1.B.1.a');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.b', '1.B.1.a');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.c', '1.B.1.a');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.d', '1.B.1.a');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.e', '1.B.1.a');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.f', '1.B.1.a');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.g', '1.B.1.a');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.h', '1.B.1.a');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.h', '1.B.1.d');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.i', '1.B.1.a');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.i', '1.B.1.e');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.j', '1.B.1.a');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.k', '1.B.1.b');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.l', '1.B.1.b');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.m', '1.B.1.b');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.n', '1.B.1.b');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.n', '1.B.1.d');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.o', '1.B.1.b');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.o', '1.B.1.c');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.p', '1.B.1.b');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.p', '1.B.1.f');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.q', '1.B.1.f');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.r', '1.B.1.c');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.s', '1.B.1.c');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.t', '1.B.1.c');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.u', '1.B.1.c');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.v', '1.B.1.c');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.w', '1.B.1.c');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.x', '1.B.1.c');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.x', '1.B.1.d');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.y', '1.B.1.d');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.z', '1.B.1.d');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.aa', '1.B.1.b');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.aa', '1.B.1.d');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.ab', '1.B.1.d');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.ab', '1.B.1.e');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.ac', '1.B.1.d');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.ad', '1.B.1.d');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.ad', '1.B.1.e');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.ae', '1.B.1.e');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.af', '1.B.1.e');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.ag', '1.B.1.c');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.ag', '1.B.1.e');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.ah', '1.B.1.e');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.ah', '1.B.1.f');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.ai', '1.B.1.f');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.aj', '1.B.1.d');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.aj', '1.B.1.f');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.ak', '1.B.1.f');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.al', '1.B.1.e');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.am', '1.B.1.e');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.an', '1.B.1.e');
INSERT INTO basic_interests_to_riasec (basic_interests_element_id, riasec_element_id) VALUES ('1.B.3.ao', '1.B.1.e');
GO

