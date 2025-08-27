document.addEventListener("DOMContentLoaded", () => {
  // 60% DTC | 20% A - Controle | 20% B - Teste
  const randomChance = Math.random();
  const body = document.body;
  const urlParams = new URLSearchParams(location.search);
  const funnelId = urlParams.get("funnelid") ?? body.dataset.funnel;

  if (randomChance < 0.2) {
    // Versão A (20%)
    body.dataset.funnel = "dtc-va"; // Dataset &funnelid
    document
      .querySelectorAll(".buylink.kit1, .buylink.kit2")
      .forEach((link) => {
        const url = new URL(link.href);
        url.searchParams.set("cbfid", "60806"); // CBFID K1 K2
        link.href = url.toString();
      });

    document.querySelectorAll(".buylink.kit3").forEach((link) => {
      const url = new URL(link.href);
      url.searchParams.set("cbfid", "60806"); // CBFID K3
      link.href = url.toString();
    });
  } else if (randomChance < 0.4) {
    // Versão B (20%)
    body.dataset.funnel = "dtc-vb"; // Dataset &funnelid
    document
      .querySelectorAll(".buylink.kit1, .buylink.kit2")
      .forEach((link) => {
        const url = new URL(link.href);
        url.searchParams.set("cbfid", "60729"); // CBFID K1 K2
        link.href = url.toString();
      });

    document.querySelectorAll(".buylink.kit3").forEach((link) => {
      const url = new URL(link.href);
      url.searchParams.set("cbfid", "60730"); // CBFID K3
      link.href = url.toString();
    });
  } else {
    // Versão original (60%)
    body.dataset.funnel = "dtc";
  }

  if (funnelId) {
    document.querySelectorAll(".buylink").forEach((link) => {
      const url = new URL(link.href);
      url.searchParams.set("funnelid", funnelId);
      link.href = url.toString();
    });
  }
});
