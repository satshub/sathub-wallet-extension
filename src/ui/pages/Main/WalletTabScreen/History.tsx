import { Column, Row } from '@/ui/components';
import { TabBar } from '@/ui/components/TabBar';
import { useAppDispatch } from '@/ui/state/hooks';
import { useOrdinalsAssetTabKey } from '@/ui/state/ui/hooks';
import { OrdinalsAssetTabKey, uiActions } from '@/ui/state/ui/reducer';


export function HistoryTab() {
  const tabItems = [
    {
      key: OrdinalsAssetTabKey.ALL,
      label: 'Send',
    },
    {
      key: OrdinalsAssetTabKey.BRC20,
      label: 'Receive',
    }
  ];

  const tabKey = useOrdinalsAssetTabKey();
  const dispatch = useAppDispatch();
  return (
    <Column>
      <Row justifyBetween>
        <TabBar
          defaultActiveKey={tabKey}
          activeKey={tabKey}
          items={tabItems}
          preset="style2"
          onTabClick={(key) => {
            dispatch(uiActions.updateAssetTabScreen({ ordinalsAssetTabKey: key }));
          }}
        />
      </Row>
    </Column>
  );
}
