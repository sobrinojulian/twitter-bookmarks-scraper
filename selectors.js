const SELECTORS = {
  username:
    "#react-root > div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1qe8dj5.rn-1mlwlqe.rn-eqz5dr.rn-1pi2tsx.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-13qz1uu.rn-1lgpqti > main > div > div > form > div > div:nth-child(6) > div > input",

  password:
    "#react-root > div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1qe8dj5.rn-1mlwlqe.rn-eqz5dr.rn-1pi2tsx.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-13qz1uu.rn-1lgpqti > main > div > div > form > div > div:nth-child(7) > div > input",

  button:
    "#react-root > div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1qe8dj5.rn-1mlwlqe.rn-eqz5dr.rn-1pi2tsx.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-13qz1uu.rn-1lgpqti > main > div > div > form > div > div.rn-1oszu61.rn-urgr8i.rn-1c1gj4h.rn-114ovsg.rn-oucylx.rn-855088.rn-1bxrh7q.rn-waaub4.rn-sqtsar.rn-qb5c1y.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-5kkj8d.rn-13l2t4g.rn-qklmqi.rn-1ljd8xs.rn-deolkf.rn-1loqt21.rn-6koalj.rn-1qe8dj5.rn-1mlwlqe.rn-eqz5dr.rn-1w2pmg.rn-156q2ks.rn-61z16t.rn-15d164r.rn-11wrixw.rn-1jayybb.rn-17bavie.rn-wk8lta.rn-1pl8ijs.rn-1mdbw0j.rn-1wx0zj.rn-bnwqim.rn-o7ynqc.rn-6416eg.rn-lrvibr.rn-13qz1uu.rn-1lgpqti",

  tryAgainButton:
    "div.rn-1oszu61.rn-urgr8i.rn-1c1gj4h.rn-114ovsg.rn-oucylx.rn-855088.rn-1bxrh7q.rn-waaub4.rn-sqtsar.rn-qb5c1y.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-5kkj8d.rn-13l2t4g.rn-qklmqi.rn-1ljd8xs.rn-deolkf.rn-1loqt21.rn-6koalj.rn-1qe8dj5.rn-1mlwlqe.rn-eqz5dr.rn-1w2pmg.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-1vuscfd.rn-1dhvaqw.rn-wk8lta.rn-1pl8ijs.rn-1mdbw0j.rn-1wx0zj.rn-bnwqim.rn-o7ynqc.rn-6416eg.rn-lrvibr.rn-1lgpqti",

  twits:
    "#react-root > div > main > div > div.rn-1oszu61.rn-aqfbo4.rn-e84r5y.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1qe8dj5.rn-1mlwlqe.rn-eqz5dr.rn-16y2uox.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div > div > div > div > section > div > div > div",

  fifthTwit:
    "#react-root > div > main > div > div.rn-1oszu61.rn-aqfbo4.rn-e84r5y.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1qe8dj5.rn-1mlwlqe.rn-eqz5dr.rn-16y2uox.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div > div > div > div > section > div > div > div > div:nth-child(5) > div > div",

  twitName:
    "#react-root > div > main > div > div.rn-1oszu61.rn-aqfbo4.rn-e84r5y.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1qe8dj5.rn-1mlwlqe.rn-eqz5dr.rn-16y2uox.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div > div > div > div > section > div > div > div > div:nth-child(1) > div > div > article > div > div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1qe8dj5.rn-1iusvr4.rn-eqz5dr.rn-46vdb2.rn-1mnahxq.rn-7o8qx1.rn-p1pxzi.rn-1f6r7vd.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1qe8dj5.rn-1mlwlqe.rn-eqz5dr.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-19i43ro.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1qe8dj5.rn-1mlwlqe.rn-18u37iz.rn-1wtj0ep.rn-1mnahxq.rn-61z16t.rn-11wrixw.rn-zl2h9q.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div.rn-1d09ksm.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1mlwlqe.rn-18u37iz.rn-1wbh5a2.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1mlwlqe.rn-eqz5dr.rn-1wbh5a2.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > a > div > div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1qe8dj5.rn-1mlwlqe.rn-18u37iz.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-dnmrzs.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-hkyrab.rn-1471scf.rn-14xgk7a.rn-a023e6.rn-o11vmf.rn-ebii48.rn-vw2c0b.rn-ad9z0x.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-dnmrzs.rn-bcqeeo.rn-11yh6sk.rn-buy8e9.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bauka4.rn-1udbk01.rn-3s2u2q.rn-qvutc0 > span > span",

  twitAccount:
    "#react-root > div > main > div > div.rn-1oszu61.rn-aqfbo4.rn-e84r5y.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1qe8dj5.rn-1mlwlqe.rn-eqz5dr.rn-16y2uox.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div > div > div > div > section > div > div > div > div:nth-child(1) > div > div > article > div > div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1qe8dj5.rn-1iusvr4.rn-eqz5dr.rn-46vdb2.rn-1mnahxq.rn-7o8qx1.rn-p1pxzi.rn-1f6r7vd.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1qe8dj5.rn-1mlwlqe.rn-eqz5dr.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-19i43ro.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1qe8dj5.rn-1mlwlqe.rn-18u37iz.rn-1wtj0ep.rn-1mnahxq.rn-61z16t.rn-11wrixw.rn-zl2h9q.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div.rn-1d09ksm.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1mlwlqe.rn-18u37iz.rn-1wbh5a2.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1mlwlqe.rn-eqz5dr.rn-1wbh5a2.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > a > div > div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1mlwlqe.rn-18u37iz.rn-1wbh5a2.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-1f6r7vd.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div",

  twitDescription:
    "#react-root > div > main > div > div.rn-1oszu61.rn-aqfbo4.rn-e84r5y.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1qe8dj5.rn-1mlwlqe.rn-eqz5dr.rn-16y2uox.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div > div > div > div > section > div > div > div > div:nth-child(1) > div > div > article > div > div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1qe8dj5.rn-1iusvr4.rn-eqz5dr.rn-46vdb2.rn-1mnahxq.rn-7o8qx1.rn-p1pxzi.rn-1f6r7vd.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1qe8dj5.rn-1mlwlqe.rn-eqz5dr.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-19i43ro.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-hkyrab.rn-1471scf.rn-14xgk7a.rn-a023e6.rn-o11vmf.rn-ebii48.rn-16dba41.rn-ad9z0x.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-bauka4.rn-q42fyq.rn-qvutc0"
};
module.exports = SELECTORS;
